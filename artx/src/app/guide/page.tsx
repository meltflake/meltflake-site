import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '申请指南',
  description: '艺术院校申请全攻略：各国差异对比、时间线规划、作品集指南、面试技巧、IB 学生专题、申请材料清单。',
}

const guides = [
  { icon: '🌍', title: '各国申请差异对比', desc: '美、英、加、澳、港、新、中七个地区的申请方式和要求全面对比', href: '/guide/country-comparison' },
  { icon: '📅', title: '申请时间线', desc: '从九年级到十二年级的完整准备规划', href: '/guide/timeline' },
  { icon: '🎨', title: '作品集指南', desc: '10 个关键技巧和必须避免的常见错误', href: '/guide/portfolio' },
  { icon: '🎤', title: '面试技巧', desc: '面试形式、高频问题和作品集讲解要点', href: '/guide/interview' },
  { icon: '📚', title: 'IB 学生专题', desc: 'IB 课程作品如何用于大学申请', href: '/guide/ib' },
  { icon: '✅', title: '申请材料清单', desc: '通用申请材料、艺术特定材料一览', href: '/guide/checklist' },
]

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">申请指南</h1>
      <p className="mt-2 text-gray-600">从时间规划到作品集准备，帮你系统化地完成艺术院校申请。</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
          >
            <span className="text-3xl">{g.icon}</span>
            <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-indigo-700">{g.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
