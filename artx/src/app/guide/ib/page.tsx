import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IB 学生专题',
  description: 'IB 学生申请艺术院校的特殊考虑：课程作品使用、时间优势和申请策略。',
}

export default function IBGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/guide" className="text-sm text-indigo-600 hover:underline">&larr; 返回申请指南</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">IB 学生申请艺术院校专题</h1>
      <p className="mt-2 text-gray-600">IB 课程如何为你的艺术院校申请加分。</p>

      {/* Q1 */}
      <Section title="IB 视觉艺术课程作品能否用于大学申请作品集？">
        <CalloutBox type="success" title="答案：可以使用">
          IB 视觉艺术课程中创作的作品可以包含在大学申请作品集中。但需要注意：
        </CalloutBox>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2"><span className="text-amber-500">⚠</span>与 IB 协调员确认作品所有权</li>
          <li className="flex items-start gap-2"><span className="text-amber-500">⚠</span>部分学校要求签署作品归属文件</li>
          <li className="flex items-start gap-2"><span className="text-amber-500">⚠</span>不同学校政策可能不同，务必确认</li>
        </ul>
      </Section>

      {/* Q2 */}
      <Section title="IB 文凭对艺术院校申请的优势">
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard title="74%" desc="IB 毕业生即时大学入学率（高于全国平均 64%）" />
          <StatCard title="全球认可" desc="IB 文凭在全球范围内得到广泛认可" />
          <StatCard title="学术准备" desc="IB 毕业生为大学学术工作做好了充分准备" />
        </div>
        <CalloutBox type="info" title="RISD 的政策" className="mt-4">
          RISD 不接受 IB 视觉艺术课程的大学学分，但仍然鼓励学生选修这些课程——它展示了对艺术的严肃承诺。
        </CalloutBox>
      </Section>

      {/* Q3 */}
      <Section title="IB 视觉艺术课程的结构">
        <div className="space-y-3">
          <InfoBox title="Process Portfolio（过程作品集）" desc="记录艺术创作过程。SL: 9-18 个屏幕 / HL: 13-25 个屏幕" />
          <InfoBox title="Exhibition（展览）" desc="最终作品展示，展示技术能力和概念深度" />
          <InfoBox title="Comparative Study（比较研究）" desc="艺术史和批判性分析，培养学术写作能力" />
        </div>
      </Section>

      {/* Q4 */}
      <Section title="IB 过程作品集 vs 大学申请作品集">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <h4 className="font-semibold text-blue-900">IB 过程作品集</h4>
            <ul className="mt-2 space-y-1 text-sm text-blue-800">
              <li>强调过程而非最终产品</li>
              <li>包含研究、实验、反思</li>
              <li>需要大量文字说明和分析</li>
              <li>记录艺术发展的旅程</li>
            </ul>
          </div>
          <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-900">大学申请作品集</h4>
            <ul className="mt-2 space-y-1 text-sm text-indigo-800">
              <li>强调最终作品质量</li>
              <li>展示技术能力和创意</li>
              <li>通常 12-20 件完成作品</li>
              <li>更多视觉冲击，较少文字</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <h4 className="font-semibold text-gray-800">如何利用 IB 作品</h4>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 text-sm">
            <div>
              <p className="font-medium text-green-700">✓ 可以使用</p>
              <ul className="mt-1 space-y-1 text-gray-600">
                <li>IB 过程作品集中的强大最终作品</li>
                <li>展示技术能力的完成作品</li>
                <li>系列作品中的代表作</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-red-700">✗ 需要调整</p>
              <ul className="mt-1 space-y-1 text-gray-600">
                <li>去除过多的过程文档</li>
                <li>重新拍摄高质量照片</li>
                <li>选择最强作品而非所有作品</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Q5 */}
      <Section title="是否应该选修 IB 视觉艺术？">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <h4 className="font-semibold text-green-900">选修优势</h4>
            <ul className="mt-2 space-y-1 text-sm text-green-800">
              <li>提供结构化的艺术教育</li>
              <li>两年内创作大量作品</li>
              <li>展示对艺术的学术承诺</li>
              <li>发展批判性分析能力</li>
              <li>学习在截止日期下工作</li>
            </ul>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <h4 className="font-semibold text-amber-900">需要考虑的挑战</h4>
            <ul className="mt-2 space-y-1 text-sm text-amber-800">
              <li>IB 视觉艺术 HL 工作量很大</li>
              <li>艺术评分可能很主观</li>
              <li>需要与其他科目平衡</li>
              <li>许多顶尖艺术院校不接受 IB 艺术学分</li>
            </ul>
          </div>
        </div>
        <CalloutBox type="info" title="关键建议" className="mt-4">
          不要仅仅依赖 IB 课程，要在课外继续个人艺术创作。将 IB 课程作品视为作品集的一部分，而非全部。
        </CalloutBox>
      </Section>

      {/* Best Practices */}
      <Section title="IB 学生的最佳实践">
        <div className="space-y-3">
          <PracticeItem num="1" title="早期规划（9-10年级）" desc="建立扎实的基础技能，探索不同媒介和风格，开始建立作品档案。" />
          <PracticeItem num="2" title="IB 课程期间（11-12年级）" desc="充分利用 IB 视觉艺术课程，在 IB 作品之外继续个人创作，参加 National Portfolio Day。" />
          <PracticeItem num="3" title="平衡学术和艺术" desc="保持良好的 GPA，不要因为艺术而忽视其他科目。利用 CAS 要求进行艺术活动。" />
          <PracticeItem num="4" title="利用国际视野" desc="在作品中体现多元文化背景，探索全球艺术运动和影响，考虑申请多个国家的艺术院校。" />
          <PracticeItem num="5" title="建立独特的艺术声音" desc="不要只做 IB 要求的作品。发展个人兴趣和风格，创作反映个人经历和视角的作品。" />
        </div>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-bold text-gray-900">{title}</h2>
      {children}
    </section>
  )
}

function CalloutBox({ type, title, children, className = '' }: { type: 'success' | 'info'; title: string; children: React.ReactNode; className?: string }) {
  const styles = type === 'success'
    ? 'border-green-200 bg-green-50 text-green-900'
    : 'border-blue-200 bg-blue-50 text-blue-900'
  return (
    <div className={`rounded-lg border p-4 ${styles} ${className}`}>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm opacity-90">{children}</p>
    </div>
  )
}

function StatCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 text-center">
      <p className="text-2xl font-bold text-indigo-700">{title}</p>
      <p className="mt-1 text-xs text-gray-600">{desc}</p>
    </div>
  )
}

function InfoBox({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function PracticeItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4">
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{num}</span>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="mt-0.5 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  )
}
