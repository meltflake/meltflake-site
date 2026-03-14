'use client'

import { useState, useMemo } from 'react'
import type { School } from '@/lib/types'
import { getCountryLabel, getTierLabel, getProgramLabel } from '@/lib/data'
import SchoolCard from './SchoolCard'

const COUNTRIES = ['US', 'UK', 'CA', 'AU', 'HK', 'SG', 'CN'] as const
const TIERS = ['top', 'mid'] as const

export default function SchoolFilters({ schools }: { schools: School[] }) {
  const [country, setCountry] = useState<string>('')
  const [tier, setTier] = useState<string>('')
  const [program, setProgram] = useState<string>('')

  // Get unique program IDs
  const allPrograms = useMemo(() => {
    const set = new Set<string>()
    schools.forEach((s) => s.programs.forEach((p) => set.add(p)))
    return Array.from(set).sort()
  }, [schools])

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      if (country && s.country !== country) return false
      if (tier && s.tier !== tier) return false
      if (program && !s.programs.includes(program)) return false
      return true
    })
  }, [schools, country, tier, program])

  const reset = () => {
    setCountry('')
    setTier('')
    setProgram('')
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">所有国家</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{getCountryLabel(c)}</option>
          ))}
        </select>

        <select
          value={tier}
          onChange={(e) => setTier(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">所有档次</option>
          {TIERS.map((t) => (
            <option key={t} value={t}>{getTierLabel(t)}</option>
          ))}
        </select>

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">所有专业</option>
          {allPrograms.map((p) => (
            <option key={p} value={p}>{getProgramLabel(p)}</option>
          ))}
        </select>

        {(country || tier || program) && (
          <button onClick={reset} className="text-sm text-indigo-600 hover:underline">
            清除筛选
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-gray-500">共 {filtered.length} 所院校</p>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <SchoolCard key={s.id} school={s} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-gray-400">没有找到符合条件的院校</p>
      )}
    </div>
  )
}
