import Link from 'next/link'
import type { Program } from '@/lib/types'

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.id}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700">
        {program.name_zh}
      </h3>
      <p className="mt-0.5 text-xs text-gray-500">{program.name_en}</p>
      <p className="mt-3 flex-1 text-sm text-gray-600 line-clamp-2">
        {program.description.slice(0, 80)}...
      </p>
      <p className="mt-3 text-xs text-gray-400">
        {program.schools.length} 所院校开设此专业
      </p>
    </Link>
  )
}
