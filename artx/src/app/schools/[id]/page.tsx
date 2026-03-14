import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSchools, getSchoolById, getProgramsBySchool, getCountryFlag, getCountryLabel, getTierLabel } from '@/lib/data'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getAllSchools().map((s) => ({ id: s.id }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const school = getSchoolById(id)
    if (!school) return { title: '未找到院校' }
    return {
      title: `${school.name_zh}（${school.abbreviation}）`,
      description: `${school.name_zh}的录取率、学费、作品集要求和申请截止日期。`,
    }
  })
}

export default async function SchoolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const school = getSchoolById(id)
  if (!school) notFound()

  const programs = getProgramsBySchool(school.id)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Back */}
      <Link href="/schools" className="text-sm text-indigo-600 hover:underline">&larr; 返回院校列表</Link>

      {/* Header */}
      <div className="mt-4 flex flex-wrap items-start gap-3">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{school.name_zh}</h1>
          <p className="mt-1 text-gray-500">{school.name_en}</p>
          <p className="mt-1 text-sm text-gray-500">
            {getCountryFlag(school.country)} {school.city_zh} · {school.type}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-medium ${school.tier === 'top' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
          {getTierLabel(school.tier)}
        </span>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatBox label="QS 艺术设计排名" value={school.qs_ranking ? `#${school.qs_ranking}` : '未进入 Top 50'} />
        <StatBox label="录取率" value={school.acceptance_rate} />
        <StatBox label={school.country === 'US' ? '年学费' : '年学费 (折合美元)'} value={`$${school.tuition_usd.toLocaleString()}`} />
        <StatBox label="标化考试" value={school.test_optional ? 'Test-Optional' : '必须提交'} />
      </div>

      {school.sat_range && (
        <p className="mt-2 text-xs text-gray-500">SAT 参考范围：{school.sat_range}</p>
      )}

      {/* Programs */}
      <Section title="开设专业">
        <div className="flex flex-wrap gap-2">
          {programs.map((p) => (
            <Link
              key={p.id}
              href={`/programs/${p.id}`}
              className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm text-indigo-700 hover:bg-indigo-100"
            >
              {p.name_zh}
            </Link>
          ))}
        </div>
      </Section>

      {/* Portfolio */}
      <Section title="作品集要求">
        <div className="grid gap-3 sm:grid-cols-3">
          <InfoItem label="作品数量" value={school.portfolio.pieces + ' 件'} />
          <InfoItem label="提交平台" value={school.portfolio.platform} />
          <InfoItem label="观察性绘画" value={school.portfolio.observational_drawing_required ? '强烈建议包含' : '不强制要求'} />
        </div>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{school.portfolio.description}</p>
      </Section>

      {/* Deadlines */}
      <Section title="申请截止日期">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {school.deadlines.early_decision && (
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-gray-700">早期决定 (ED)</td>
                  <td className="py-2 text-gray-600">{school.deadlines.early_decision}</td>
                </tr>
              )}
              {school.deadlines.early_action && (
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium text-gray-700">早期行动 (EA)</td>
                  <td className="py-2 text-gray-600">{school.deadlines.early_action}</td>
                </tr>
              )}
              <tr>
                <td className="py-2 font-medium text-gray-700">常规决定 (RD)</td>
                <td className="py-2 text-gray-600">{school.deadlines.regular_decision}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Living Cost */}
      <Section title="生活成本">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatBox label="月生活费（低）" value={`$${school.living_cost.monthly_low_usd.toLocaleString()}`} />
          <StatBox label="月生活费（高）" value={`$${school.living_cost.monthly_high_usd.toLocaleString()}`} />
          <StatBox label="4 年生活费估算" value={`$${(school.living_cost.monthly_low_usd * 48 / 1000).toFixed(0)}k–${(school.living_cost.monthly_high_usd * 48 / 1000).toFixed(0)}k`} />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            school.living_cost.tier === 'high' ? 'bg-red-100 text-red-700' :
            school.living_cost.tier === 'mid-high' ? 'bg-orange-100 text-orange-700' :
            school.living_cost.tier === 'mid' ? 'bg-yellow-100 text-yellow-700' :
            'bg-green-100 text-green-700'
          }`}>
            {school.living_cost.tier === 'high' ? '高消费城市' :
             school.living_cost.tier === 'mid-high' ? '中高消费城市' :
             school.living_cost.tier === 'mid' ? '中等消费城市' : '低消费城市'}
          </span>
          <span className="text-xs text-gray-400">不含学费，含住房、餐饮、交通等</span>
        </div>
        <p className="mt-2 text-xs text-gray-400">数据来源：{school.living_cost.source}</p>
      </Section>

      {/* Financial Aid */}
      <Section title="费用与资助">
        <div className="flex gap-3 mb-3">
          {school.financial_aid.merit_scholarships && (
            <span className="rounded bg-green-50 px-2 py-1 text-xs text-green-700">Merit 奖学金</span>
          )}
          {school.financial_aid.need_based_aid && (
            <span className="rounded bg-green-50 px-2 py-1 text-xs text-green-700">Need-based 援助</span>
          )}
        </div>
        <p className="text-sm text-gray-600">{school.financial_aid.description}</p>
      </Section>

      {/* Highlights */}
      <Section title="学校亮点">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          {school.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </Section>

      {/* External Links */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={school.website}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
        >
          访问学校官网 &rarr;
        </a>
        <a
          href={school.application_url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-indigo-600 px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
        >
          申请入口
        </a>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  )
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-3 text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-gray-800">{value}</p>
    </div>
  )
}
