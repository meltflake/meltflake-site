import { getAllPrograms } from '@/lib/data'
import ProgramCard from '@/components/ProgramCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '专业方向',
  description: '了解各个艺术设计专业学什么、做什么、未来前景如何。10 大专业方向全解读。',
}

export default function ProgramsPage() {
  const programs = getAllPrograms()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">专业方向</h1>
      <p className="mt-2 text-gray-600">
        了解各个艺术设计专业学什么、做什么、AI 时代前景如何。
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
    </div>
  )
}
