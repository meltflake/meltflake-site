import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPrograms, getProgramById, getSchoolsByProgram, getTierLabel } from '@/lib/data'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getAllPrograms().map((p) => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const program = getProgramById(id)
    if (!program) return { title: '未找到专业' }
    return {
      title: `${program.name_zh}（${program.name_en}）`,
      description: `${program.name_zh}专业介绍：学什么、做什么、AI 时代竞争力分析。`,
    }
  })
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const program = getProgramById(id)
  if (!program) notFound()

  const schools = getSchoolsByProgram(program.id)
  const topSchools = schools.filter((s) => s.tier === 'top')
  const midSchools = schools.filter((s) => s.tier === 'mid')

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/programs" className="text-sm text-indigo-600 hover:underline">&larr; 返回专业列表</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">{program.name_zh}</h1>
      <p className="mt-1 text-gray-500">{program.name_en}</p>

      {/* Description */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">专业简介</h2>
        {program.description.split('\n\n').map((para, i) => (
          <p key={i} className="mt-2 text-sm text-gray-600 leading-relaxed">{para}</p>
        ))}
      </section>

      {/* Courses */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">典型课程</h2>
        <div className="flex flex-wrap gap-2">
          {program.typical_courses.map((c, i) => (
            <span key={i} className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-700">{c}</span>
          ))}
        </div>
      </section>

      {/* Career Paths */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">职业方向</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-2 font-medium text-gray-700">职位</th>
                <th className="py-2 font-medium text-gray-700">年薪范围（美元）</th>
              </tr>
            </thead>
            <tbody>
              {program.career_paths.map((cp, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 text-gray-800">{cp.title}</td>
                  <td className="py-2 text-gray-600">{cp.salary_range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI Outlook */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">AI 时代竞争力分析</h2>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-gray-700 leading-relaxed">{program.ai_outlook}</p>
        </div>
      </section>

      {/* Schools */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">推荐院校</h2>

        {topSchools.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-medium text-amber-800">顶尖档</h3>
            <div className="flex flex-wrap gap-2">
              {topSchools.map((s) => (
                <Link
                  key={s.id}
                  href={`/schools/${s.id}`}
                  className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm text-amber-900 hover:bg-amber-100"
                >
                  {s.name_zh}（{s.abbreviation}）
                </Link>
              ))}
            </div>
          </div>
        )}

        {midSchools.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-medium text-blue-800">中级档</h3>
            <div className="flex flex-wrap gap-2">
              {midSchools.map((s) => (
                <Link
                  key={s.id}
                  href={`/schools/${s.id}`}
                  className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm text-blue-900 hover:bg-blue-100"
                >
                  {s.name_zh}（{s.abbreviation}）
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
