import Link from 'next/link'
import type { School } from '@/lib/types'
import { getCountryFlag, getCountryLabel, getTierLabel, getProgramLabel } from '@/lib/data'

export default function SchoolCard({ school }: { school: School }) {
  return (
    <Link
      href={`/schools/${school.id}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700">
            {school.name_zh}
          </h3>
          <p className="mt-0.5 text-xs text-gray-500">{school.abbreviation}</p>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            school.tier === 'top'
              ? 'bg-amber-100 text-amber-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {getTierLabel(school.tier)}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
        <span>{getCountryFlag(school.country)} {getCountryLabel(school.country)}</span>
        <span>{school.qs_ranking ? `QS #${school.qs_ranking}` : 'QS 未上榜'}</span>
        <span>录取率 {school.acceptance_rate}</span>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 text-xs text-gray-500">
        <span>年学费 ~${school.tuition_usd.toLocaleString()}{school.country !== 'US' && ' (折合美元)'}</span>
        <span>月生活费 ${school.living_cost.monthly_low_usd.toLocaleString()}–{school.living_cost.monthly_high_usd.toLocaleString()}</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {school.programs.slice(0, 4).map((p) => (
          <span key={p} className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600">
            {getProgramLabel(p)}
          </span>
        ))}
        {school.programs.length > 4 && (
          <span className="text-[10px] text-gray-400">+{school.programs.length - 4}</span>
        )}
      </div>
    </Link>
  )
}
