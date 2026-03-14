import Link from 'next/link'
import { getAllSchools, getAllPrograms } from '@/lib/data'

export default function Home() {
  const schools = getAllSchools()
  const programs = getAllPrograms()
  const countries = new Set(schools.map((s) => s.country))

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white px-4 py-20 text-center">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
          帮助艺术生和家长
          <br />
          做出更好的选校决策
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          整合全球艺术院校信息，抹平信息差。从院校对比到作品集准备，一站式解决艺术留学疑问。
        </p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-200 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <span>覆盖 <strong className="text-indigo-700">美、英、加、澳、港、新、中</strong> 7 个地区</span>
          <span className="text-gray-300">|</span>
          <span><strong className="text-indigo-700">{schools.length}</strong> 所院校</span>
          <span className="text-gray-300">|</span>
          <span><strong className="text-indigo-700">{programs.length}</strong> 个专业方向</span>
        </div>
      </section>

      {/* Entry cards */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <EntryCard
            icon="🏫"
            title="浏览院校"
            desc={`探索 ${schools.length} 所全球艺术院校，按国家、专业、学费筛选`}
            href="/schools"
          />
          <EntryCard
            icon="🎨"
            title="了解专业"
            desc={`${programs.length} 大艺术设计专业方向全解读：学什么、做什么、AI 时代前景`}
            href="/programs"
          />
          <EntryCard
            icon="📋"
            title="准备申请"
            desc="时间线、作品集指南、申请材料清单，一站式申请指南"
            href="/guide"
          />
        </div>
      </section>

      {/* Value proposition */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">为什么做这个网站？</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            艺术留学的信息分散在各个院校官网、中介机构和社交媒体上。家长和学生常常面临信息不对称的困境——不知道有哪些学校可选、不清楚作品集要求的区别、不了解各专业的就业前景。
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            ArtX 旨在将这些分散的信息整合成一个结构化、可比较的数据库，覆盖美、英、加、澳以及中国大陆、香港和新加坡的优秀艺术院校，让每个家庭都能做出更明智的选校决策。所有信息均来自 QS 排名和各院校官方网站，定期更新。
          </p>
        </div>
      </section>
    </div>
  )
}

function EntryCard({ icon, title, desc, href }: { icon: string; title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md"
    >
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-indigo-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </Link>
  )
}
