'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getAllSchools, getCountryLabel, getCountryFlag, getTierLabel, getProgramLabel } from '@/lib/data'
import type { School } from '@/lib/types'

export default function ComparePage() {
  const allSchools = getAllSchools()
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const selectedSchools = useMemo(
    () => selectedIds.map((id) => allSchools.find((s) => s.id === id)).filter(Boolean) as School[],
    [selectedIds, allSchools]
  )

  const addSchool = (id: string) => {
    if (!selectedIds.includes(id) && selectedIds.length < 3) {
      setSelectedIds([...selectedIds, id])
    }
  }

  const removeSchool = (id: string) => {
    setSelectedIds(selectedIds.filter((sid) => sid !== id))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">选校对比</h1>
      <p className="mt-2 text-gray-600">选择 2-3 所院校，直观比较关键指标。</p>

      {/* Selector */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <select
          onChange={(e) => {
            if (e.target.value) addSchool(e.target.value)
            e.target.value = ''
          }}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          disabled={selectedIds.length >= 3}
        >
          <option value="">{selectedIds.length >= 3 ? '最多选择 3 所' : '添加院校...'}</option>
          {allSchools
            .filter((s) => !selectedIds.includes(s.id))
            .map((s) => (
              <option key={s.id} value={s.id}>
                {s.name_zh}（{s.abbreviation}）
              </option>
            ))}
        </select>

        {selectedSchools.map((s) => (
          <span
            key={s.id}
            className="flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800"
          >
            {s.abbreviation}
            <button onClick={() => removeSchool(s.id)} className="ml-1 text-indigo-600 hover:text-indigo-900">
              &times;
            </button>
          </span>
        ))}

        {selectedIds.length > 0 && (
          <button onClick={() => setSelectedIds([])} className="text-sm text-gray-500 hover:underline">
            清除全部
          </button>
        )}
      </div>

      {/* Comparison Table */}
      {selectedSchools.length >= 2 ? (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 pr-4 text-left font-medium text-gray-500 w-32">对比项目</th>
                {selectedSchools.map((s) => (
                  <th key={s.id} className="py-3 px-4 text-left font-semibold text-gray-900">
                    <Link href={`/schools/${s.id}`} className="hover:text-indigo-700">
                      {s.name_zh}
                    </Link>
                    <p className="text-xs font-normal text-gray-500">{s.abbreviation}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <CompareRow label="国家" values={selectedSchools.map((s) => `${getCountryFlag(s.country)} ${getCountryLabel(s.country)}`)} />
              <CompareRow label="档次" values={selectedSchools.map((s) => getTierLabel(s.tier))} />
              <CompareRow label="QS 排名" values={selectedSchools.map((s) => s.qs_ranking ? `#${s.qs_ranking}` : '未进入 Top 50')} />
              <CompareRow label="录取率" values={selectedSchools.map((s) => s.acceptance_rate)} highlight />
              <CompareRow label="年学费 (USD)" values={selectedSchools.map((s) => `$${s.tuition_usd.toLocaleString()}${s.country !== 'US' ? ' *' : ''}`)} highlight />
              <CompareRow label="月生活费 (USD)" values={selectedSchools.map((s) => `$${s.living_cost.monthly_low_usd.toLocaleString()}–${s.living_cost.monthly_high_usd.toLocaleString()}`)} />
              <CompareRow label="4 年总费用估算" values={selectedSchools.map((s) => {
                const tuition4y = s.tuition_usd * 4
                const living4yLow = s.living_cost.monthly_low_usd * 48
                const living4yHigh = s.living_cost.monthly_high_usd * 48
                return `$${((tuition4y + living4yLow) / 1000).toFixed(0)}k–${((tuition4y + living4yHigh) / 1000).toFixed(0)}k`
              })} highlight />
              <CompareRow label="标化考试" values={selectedSchools.map((s) => s.test_optional ? 'Test-Optional' : '必须')} />
              <CompareRow label="SAT 参考" values={selectedSchools.map((s) => s.sat_range || '—')} />
              <CompareRow label="作品集数量" values={selectedSchools.map((s) => s.portfolio.pieces + ' 件')} />
              <CompareRow label="提交平台" values={selectedSchools.map((s) => s.portfolio.platform)} />
              <CompareRow label="观察性绘画" values={selectedSchools.map((s) => s.portfolio.observational_drawing_required ? '建议' : '不要求')} />
              <CompareRow label="ED/EA 截止" values={selectedSchools.map((s) => s.deadlines.early_decision || s.deadlines.early_action || '—')} />
              <CompareRow label="RD 截止" values={selectedSchools.map((s) => s.deadlines.regular_decision)} />
              <CompareRow label="Merit 奖学金" values={selectedSchools.map((s) => s.financial_aid.merit_scholarships ? '✓' : '✗')} />
              <CompareRow label="开设专业" values={selectedSchools.map((s) => s.programs.map(getProgramLabel).join(', '))} />
            </tbody>
          </table>
          <p className="mt-3 text-xs text-gray-400">* 非美国院校学费已按近期汇率折算为美元，仅供参考。</p>
        </div>
      ) : (
        <div className="mt-16 text-center text-gray-400">
          <p className="text-4xl mb-4">⚖️</p>
          <p>请选择 2-3 所院校进行对比</p>
        </div>
      )}
    </div>
  )
}

function CompareRow({ label, values, highlight = false }: { label: string; values: string[]; highlight?: boolean }) {
  return (
    <tr className={`border-b border-gray-100 ${highlight ? 'bg-gray-50' : ''}`}>
      <td className="py-2.5 pr-4 font-medium text-gray-600 whitespace-nowrap">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="py-2.5 px-4 text-gray-800">{v}</td>
      ))}
    </tr>
  )
}
