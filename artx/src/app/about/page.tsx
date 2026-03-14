import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于本站',
  description: 'ArtX 是一个帮助艺术生和家长了解艺术院校信息的公共信息平台。',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">关于 ArtX</h1>

      <section className="mt-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900">本站的目标</h2>
        <p>
          ArtX（艺术院校选校指南）旨在为有意申请海外艺术院校的学生和家长提供一个结构化、可比较的信息平台。
        </p>
        <p>
          我们发现，艺术留学的信息分散在各个院校官网、中介机构和社交媒体上，家长和学生常常面临信息不对称的困境。ArtX 将这些分散的信息整合起来，让每个家庭都能做出更明智的选校决策。
        </p>
      </section>

      <section className="mt-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900">数据来源</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>QS 世界大学艺术设计专业排名（2025年版）</li>
          <li>各院校官方网站（录取率、学费、作品集要求等）</li>
          <li>Common Data Set 和公开的录取数据</li>
          <li>College Board 和各教育评估机构</li>
        </ul>
        <p className="text-sm text-gray-500">
          数据收集时间：2025年。录取率和学费每年可能发生变化，申请前务必核实院校官网信息。
        </p>
      </section>

      <section className="mt-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900">免责声明</h2>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p>
            本站信息仅供参考，不构成任何申请建议。所有数据均来自公开渠道，我们尽力确保信息的准确性，但不保证信息的完整性和时效性。
            申请前请务必以各院校官方网站公布的最新信息为准。
          </p>
        </div>
      </section>

      <section className="mt-8 space-y-4 text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-gray-900">反馈与贡献</h2>
        <p>
          如果你发现信息有误或希望补充内容，欢迎通过 GitHub 提交 Issue 或 Pull Request。
        </p>
        <a
          href="https://github.com/meltflake/artx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
        >
          GitHub 仓库 &rarr;
        </a>
      </section>

      <section className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          <Link href="/" className="text-indigo-600 hover:underline">ArtX</Link> — 帮助艺术生和家长做出更好的选校决策。
        </p>
      </section>
    </div>
  )
}
