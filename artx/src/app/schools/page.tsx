import { getAllSchools } from '@/lib/data'
import SchoolFilters from '@/components/SchoolFilters'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '院校数据库',
  description: '浏览全球 20+ 所英语国家顶尖艺术院校，按国家、专业、学费筛选比较。',
}

export default function SchoolsPage() {
  const schools = getAllSchools()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">院校数据库</h1>
      <p className="mt-2 text-gray-600">
        浏览美国、英国、加拿大、澳大利亚的艺术设计院校，按条件筛选找到适合你的学校。
      </p>
      <div className="mt-8">
        <SchoolFilters schools={schools} />
      </div>
    </div>
  )
}
