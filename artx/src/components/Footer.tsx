import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-bold text-indigo-700">ArtX</p>
            <p className="mt-1 text-sm text-gray-500">艺术院校选校指南</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <Link href="/schools" className="hover:text-indigo-700">院校数据库</Link>
            <Link href="/programs" className="hover:text-indigo-700">专业方向</Link>
            <Link href="/guide" className="hover:text-indigo-700">申请指南</Link>
            <Link href="/compare" className="hover:text-indigo-700">选校对比</Link>
            <Link href="/about" className="hover:text-indigo-700">关于本站</Link>
          </nav>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-400">
          <p>本站信息仅供参考，请以各院校官网为准。数据来源：QS 排名、各院校官方网站。</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} ArtX. All rights reserved.</p>
          <p className="mt-1">最近更新：2026 年 3 月 7 日</p>
        </div>
      </div>
    </footer>
  )
}
