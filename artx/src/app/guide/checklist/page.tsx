import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '申请材料清单',
  description: '艺术院校申请材料完整清单：通用申请材料、艺术特定材料、财务援助材料。',
}

const generalMaterials = [
  'Common Application 或学校专属申请表',
  '高中成绩单（官方翻译版本）',
  '标准化考试成绩（SAT/ACT，许多学校 Test-Optional）',
  '英语能力证明（托福/雅思，非英语母语学生）',
  '个人陈述/申请文书（Common App Essay）',
  '各学校补充文书（Supplemental Essays）',
  '2-3 封推荐信（至少 1 封来自学术老师）',
  '课外活动列表',
  '护照复印件（国际学生）',
]

const artMaterials = [
  '艺术作品集（Portfolio，12-20 件作品）',
  '艺术家陈述（Artist Statement，300-500 字）',
  '作品说明（标题、日期、媒介、尺寸）',
  '艺术老师推荐信（单独的艺术推荐）',
  '作品集平台账号（SlideRoom 等）',
  '观察性绘画作品（部分学校要求）',
  'Parsons Challenge 作品（申请 Parsons 必须）',
  '面试准备材料（部分学校要求面试）',
]

const financialMaterials = [
  'FAFSA（美国联邦学生援助申请）',
  'CSS Profile（部分私立学校要求）',
  '家庭收入证明文件',
  '奖学金单独申请表（如需要）',
  '银行存款证明（国际学生）',
  'I-20 签证所需财务文件（美国学校）',
]

const importantDates = [
  { date: '9月', event: 'Common Application 开放' },
  { date: '10月', event: 'FAFSA 开放申请' },
  { date: '11月1-15日', event: 'ED/EA 申请截止' },
  { date: '12月-1月', event: '常规申请截止（各校不同）' },
  { date: '1月-2月', event: '财务援助申请截止' },
  { date: '3月-4月', event: '录取结果发放' },
  { date: '5月1日', event: 'Decision Day — 确认入学' },
]

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/guide" className="text-sm text-indigo-600 hover:underline">&larr; 返回申请指南</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">申请材料清单</h1>
      <p className="mt-2 text-gray-600">确保你的申请不遗漏任何材料。</p>

      {/* General */}
      <ChecklistSection title="通用申请材料" items={generalMaterials} color="indigo" />

      {/* Art specific */}
      <ChecklistSection title="艺术特定材料" items={artMaterials} color="amber" />

      {/* Financial */}
      <ChecklistSection title="财务援助材料" items={financialMaterials} color="green" />

      {/* Important dates */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">重要时间节点</h2>
        <div className="space-y-2">
          {importantDates.map((d, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-3">
              <span className="w-28 flex-shrink-0 text-sm font-semibold text-indigo-700">{d.date}</span>
              <span className="text-sm text-gray-700">{d.event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5">
        <h3 className="font-semibold text-blue-900">提示</h3>
        <ul className="mt-2 space-y-1 text-sm text-blue-800">
          <li>• 提前 2-3 个月开始准备材料</li>
          <li>• 各学校截止日期不同，建议制作个人日历跟踪</li>
          <li>• 推荐人需要至少 4-6 周准备时间</li>
          <li>• 申请前务必核实各院校官网的最新要求</li>
          <li>• 所有文件保留电子备份</li>
        </ul>
      </section>
    </div>
  )
}

function ChecklistSection({ title, items, color }: { title: string; items: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    indigo: 'border-indigo-200 bg-indigo-50',
    amber: 'border-amber-200 bg-amber-50',
    green: 'border-green-200 bg-green-50',
  }
  const checkColor: Record<string, string> = {
    indigo: 'text-indigo-400',
    amber: 'text-amber-400',
    green: 'text-green-400',
  }

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-lg font-bold text-gray-900">{title}</h2>
      <div className={`rounded-lg border p-4 ${colorMap[color]}`}>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className={`mt-0.5 ${checkColor[color]}`}>☐</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
