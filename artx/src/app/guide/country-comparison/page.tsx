import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '各国申请差异对比',
  description: '美国、英国、加拿大、澳大利亚、香港、新加坡、中国大陆艺术院校申请方式、作品集要求、学制、费用全面对比。',
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const overview = [
  {
    dim: '录取核心方式',
    US: '作品集 + 标化(可选) + 文书 + 推荐信 + GPA，全面审核',
    UK: '作品集 + 面试 + UCAS 个人陈述 + A-Level/IB',
    CA: '作品集 + 高中成绩 + 语言成绩',
    AU: '作品集 + ATAR/高中成绩 + 语言成绩',
    HK: '作品集 + 高考/DSE/IB + 面试',
    SG: '作品集 + 学术成绩 + 面试',
    CN: '省统考(现场笔试) + 校考 + 高考文化课',
  },
  {
    dim: '本科学制',
    US: '4 年',
    UK: '3 年（+1 年预科）',
    CA: '4 年',
    AU: '3 年',
    HK: '4 年',
    SG: '3-4 年',
    CN: '4 年',
  },
  {
    dim: '申请系统',
    US: 'Common App / 学校独立系统',
    UK: 'UCAS 统一系统',
    CA: '学校独立系统',
    AU: '学校独立 / 州招生系统',
    HK: 'JUPAS(本地) / 学校系统',
    SG: '学校独立系统',
    CN: '省统考 + 高考志愿填报',
  },
  {
    dim: '作品集要求',
    US: '12-20 件完成作品',
    UK: '3-5 个项目含过程',
    CA: '15-20 件作品',
    AU: '10-20 件作品',
    HK: '20-30 页，5-10 个项目',
    SG: '类似英式，重过程',
    CN: '不需要，现场考试',
  },
  {
    dim: '英语要求',
    US: 'TOEFL 80-100+ / IELTS 6.5-7.0',
    UK: 'IELTS 6.0-6.5',
    CA: 'TOEFL 80-90+ / IELTS 6.5',
    AU: 'IELTS 6.0-6.5',
    HK: 'IELTS 6.0+ / 高考英语 120+',
    SG: 'IELTS 6.0+',
    CN: '无（中文教学）',
  },
  {
    dim: '年学费（折合人民币）',
    US: '22-45 万',
    UK: '15-30 万',
    CA: '10-20 万',
    AU: '12-22 万',
    HK: '4-15 万',
    SG: '8-18 万',
    CN: '0.8-2 万',
  },
  {
    dim: '申请截止时间',
    US: '早申 11 月 / 常规 1-2 月',
    UK: 'UCAS 1 月 15 日',
    CA: '1-3 月',
    AU: '前一年 9-11 月',
    HK: '11 月-次年 1 月',
    SG: '因学校而异',
    CN: '统考 12 月 / 高考 6 月',
  },
  {
    dim: '奖学金',
    US: '丰厚，金额大',
    UK: '较少，申请难度大',
    CA: '中等',
    AU: '中等',
    HK: '有，竞争激烈',
    SG: '有，金额中等',
    CN: '学费低，另有奖学金',
  },
]

const countries: CountryDetail[] = [
  {
    code: 'US',
    flag: '\u{1F1FA}\u{1F1F8}',
    name: '美国',
    style: '全面审核 (Holistic Review)',
    highlights: [
      '最成熟的艺术教育体系，顶尖名校数量最多',
      '采用"全面审核"模式：作品集、学术成绩、文书、推荐信、课外活动缺一不可',
      '大部分学校已 Test-Optional（SAT/ACT 可选），但好的标化成绩仍有加分',
      '作品集强调技术功底和创意表达，12-20 件完成作品，排版和呈现方式很重要',
      '部分学校有附加创作任务（如 RISD 的 Drawing Assignment）',
      '奖学金资源丰富，金额从几千到几万美元不等',
    ],
    portfolio: {
      pieces: '12-20 件',
      focus: '技术功底 + 创意表达 + 排版设计',
      platform: 'SlideRoom / 学校系统上传',
      tip: '美国学校看重"完成作品"的质量，要有视觉冲击力。多样性很重要——展示不同媒介和主题。',
    },
    timeline: '9-10 月准备材料 → 11 月早申截止 → 1-2 月常规截止 → 3-4 月发 offer',
  },
  {
    code: 'UK',
    flag: '\u{1F1EC}\u{1F1E7}',
    name: '英国',
    style: '作品集 + 面试为王',
    highlights: [
      '学制短（本科 3 年、硕士 1 年），留学成本相对低',
      '国际学生通常需要读 1 年 Foundation Year（预科）再进本科',
      '通过 UCAS 统一系统申请，最多选 5 个志愿',
      '非常重视作品集中的调研过程和批判性思维，过程和结果同样重要',
      '面试环节权重很高，会围绕作品集深入讨论你的思考方式',
      '奖学金较少，对国际学生尤其有限',
    ],
    portfolio: {
      pieces: '3-5 个完整项目',
      focus: '调研过程 + 批判性思维 + 概念发展',
      platform: 'UCAS 提交 / 学校面试时展示',
      tip: '英国学校最看重"你怎么想的"而不只是"做出了什么"。Sketchbook（速写本/过程本）几乎是必备的。',
    },
    timeline: '9-10 月准备 UCAS → 1 月 15 日 UCAS 截止 → 2-4 月面试 → 5-6 月发 offer',
  },
  {
    code: 'CA',
    flag: '\u{1F1E8}\u{1F1E6}',
    name: '加拿大',
    style: '类似美国，门槛略低',
    highlights: [
      '教育质量高，费用比美国低 30-50%',
      '申请流程与美国类似，但竞争相对温和',
      '毕业后可获得最长 3 年工作签证（PGWP），移民政策友好',
      '作品集要求与美国相似，15-20 件作品',
      '部分学校接受高考成绩作为学术参考',
      '双语环境（英语/法语），魁北克省学校可能有法语要求',
    ],
    portfolio: {
      pieces: '15-20 件',
      focus: '技术能力 + 创意思维',
      platform: 'SlideRoom / 学校系统上传',
      tip: '加拿大学校的作品集要求和美国很相似，但整体竞争强度低一些，性价比很高。',
    },
    timeline: '10 月开放申请 → 1-3 月截止 → 4-5 月发 offer',
  },
  {
    code: 'AU',
    flag: '\u{1F1E6}\u{1F1FA}',
    name: '澳大利亚',
    style: '门槛友好，移民加分',
    highlights: [
      '本科 3 年制，部分学校提供荣誉学位（+1 年）',
      '入学门槛相对较低，对国际学生比较友好',
      '学术年 2 月开学（与北半球相反），也有 7 月入学选项',
      '建筑设计、景观设计、平面设计等专业在全球排名靠前',
      '毕业后有 2-4 年工作签证，移民政策相对宽松',
      '丰富的多元文化环境，艺术氛围独特',
    ],
    portfolio: {
      pieces: '10-20 件',
      focus: '创意能力 + 技术基础',
      platform: '学校系统上传',
      tip: '澳洲学校整体门槛比美英低，但 RMIT、悉尼大学等名校的竞争仍然激烈。',
    },
    timeline: '前一年 9-11 月申请 → 12 月-次年 1 月发 offer → 2 月开学',
  },
  {
    code: 'HK',
    flag: '\u{1F1ED}\u{1F1F0}',
    name: '中国香港',
    style: '学术 + 作品集并重',
    highlights: [
      '本科 4 年制，学费远低于美英',
      '离家近、文化差异小，适合不想走太远的学生',
      '内地生可通过高考成绩 + 作品集申请（如理工大学"德艺计划"）',
      '部分课程英语授课，部分中英双语',
      '作品集要求 20-30 页，需展示完整设计过程',
      '学术成绩权重较高：高考成绩需达到一本线以上，英语不低于 120 分',
    ],
    portfolio: {
      pieces: '20-30 页，5-10 个项目',
      focus: '设计过程 + 创意能力 + 学术表现',
      platform: '学校系统在线提交',
      tip: '香港学校对学术成绩的要求比欧美艺术院校高得多。作品集是加分项，但高考成绩是硬门槛。',
    },
    timeline: '11 月开放申请 → 次年 1 月截止 → 6 月提交高考成绩 → 7 月发 offer',
  },
  {
    code: 'SG',
    flag: '\u{1F1F8}\u{1F1EC}',
    name: '新加坡',
    style: '偏英式体系，实用导向',
    highlights: [
      '安全、高效的城市国家，华人比例高',
      '艺术院校偏英式体系，重视过程和研究方法',
      '语言门槛相对较低，英语授课为主',
      '学费适中，政府对部分学校有学费补助（需服务义务）',
      '地处亚洲文化交汇点，当代艺术和设计产业活跃',
      '南洋理工大学 ADM 在 QS 艺术设计排名全球前 30',
    ],
    portfolio: {
      pieces: '因学校而异',
      focus: '创意过程 + 研究方法（偏英式）',
      platform: '学校系统在线提交',
      tip: '新加坡的 LASALLE 和 NAFA 门槛较低适合保底，NTU ADM 则竞争激烈需要强作品集。',
    },
    timeline: '因学校而异，一般 10 月-次年 3 月',
  },
  {
    code: 'CN',
    flag: '\u{1F1E8}\u{1F1F3}',
    name: '中国大陆',
    style: '统考 + 校考 + 高考，完全不同的体系',
    highlights: [
      '与所有海外申请方式完全不同：不提交作品集，而是参加现场笔试',
      '省统考：各省统一组织，考素描、色彩、速写等基础科目',
      '校考：34 所院校保留校考资格（如央美、国美、清美），自主命题',
      '高考文化课成绩是硬性指标，艺考改革后文化课要求逐年提高',
      '录取公式 = 专业成绩 x 权重 + 文化课成绩 x 权重',
      '学费极低（年均 1-2 万元），但竞争极其激烈（部分专业录取比超过 100:1）',
    ],
    portfolio: {
      pieces: '不需要作品集',
      focus: '现场考试：素描、色彩、速写等',
      platform: '线下考场',
      tip: '中国大陆的艺考和海外申请是完全不同的两条路。如果同时准备两条路线，需要非常好的时间管理。',
    },
    timeline: '11-12 月省统考 → 1-3 月校考 → 6 月高考 → 7 月志愿填报和录取',
  },
]

type CountryDetail = {
  code: string
  flag: string
  name: string
  style: string
  highlights: string[]
  portfolio: { pieces: string; focus: string; platform: string; tip: string }
  timeline: string
}

const KEY_REGIONS = ['US', 'UK', 'CA', 'AU', 'HK', 'SG', 'CN'] as const

const bigDifferences = [
  {
    title: '作品集提交 vs 现场考试',
    desc: '海外院校几乎都采用作品集提交的方式评估学生，而中国大陆采用现场笔试（统考+校考）。这意味着两条路线需要完全不同的准备策略。',
    icon: '\u{1F3A8}',
  },
  {
    title: '美式全面审核 vs 英式过程导向',
    desc: '美国学校"看人"——GPA、文书、活动、作品集全面权衡；英国学校"看作品"——作品集和面试决定一切，学术成绩是基础门槛。',
    icon: '\u{1F50D}',
  },
  {
    title: '学制和时间成本',
    desc: '英国本科 3 年 + 硕士 1 年 = 4 年拿硕士；美国本科 4 年 + 硕士 2 年 = 6 年。英国路线省 2 年时间和大量费用。',
    icon: '\u23F1\uFE0F',
  },
  {
    title: 'Foundation Year 是英国特色',
    desc: '英国是唯一普遍要求国际学生读预科的地区。这额外的 1 年既是适应期，也是积累作品集的好机会。',
    icon: '\u{1F4DA}',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CountryComparisonPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/guide" className="text-sm text-indigo-600 hover:underline">&larr; 返回申请指南</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">各国申请差异对比</h1>
      <p className="mt-2 text-gray-600">
        不同国家和地区的艺术院校在录取方式、作品集要求、学制和费用上差异显著。了解这些差异是选校的第一步。
      </p>

      {/* Key differences callout */}
      <section className="mt-8">
        <h2 className="mb-4 text-lg font-bold text-gray-900">最关键的差异</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {bigDifferences.map((d, i) => (
            <div key={i} className="rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{d.icon}</span>
                <div>
                  <h3 className="font-semibold text-indigo-900">{d.title}</h3>
                  <p className="mt-1 text-sm text-indigo-800">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview table */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">总览对比表</h2>
        <p className="mb-4 text-sm text-gray-500">左右滑动查看所有地区。</p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="sticky left-0 bg-gray-50 px-3 py-2.5 text-left font-semibold text-gray-700 min-w-[120px]">对比维度</th>
                {KEY_REGIONS.map((r) => (
                  <th key={r} className="px-3 py-2.5 text-left font-semibold text-gray-700 min-w-[130px]">
                    {regionLabel(r)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {overview.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="sticky left-0 border-r border-gray-100 bg-inherit px-3 py-2.5 font-medium text-gray-800">{row.dim}</td>
                  {KEY_REGIONS.map((r) => (
                    <td key={r} className="px-3 py-2.5 text-gray-600">{(row as Record<string, string>)[r]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Country details */}
      <section className="mt-12">
        <h2 className="mb-6 text-lg font-bold text-gray-900">各地区详细说明</h2>
        <div className="space-y-8">
          {countries.map((c) => (
            <CountrySection key={c.code} country={c} />
          ))}
        </div>
      </section>

      {/* Dual-track advice */}
      <section className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-semibold text-amber-900">同时准备多条路线？</h3>
        <div className="mt-2 space-y-2 text-sm text-amber-800">
          <p>
            很多家庭会同时考虑国内艺考和海外申请（"双轨制"），但需要注意：两条路线的准备方式几乎没有重叠。国内艺考练的是应试技巧（素描石膏像、色彩静物），海外作品集要的是创意表达和个人风格。
          </p>
          <p>
            如果计划双轨并行，建议最迟从高一暑假开始规划，确保有足够时间分别准备。同时准备美国和英国申请则相对容易，因为核心都是作品集，只是侧重点不同。
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/schools"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
        >
          浏览院校数据库 &rarr;
        </Link>
        <Link
          href="/guide/portfolio"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
        >
          作品集指南 &rarr;
        </Link>
        <Link
          href="/guide/timeline"
          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700"
        >
          申请时间线 &rarr;
        </Link>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function CountrySection({ country: c }: { country: CountryDetail }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
        <h3 className="text-base font-bold text-gray-900">
          <span className="mr-2">{c.flag}</span>{c.name}
          <span className="ml-2 text-sm font-normal text-gray-500">— {c.style}</span>
        </h3>
      </div>

      <div className="p-5">
        {/* Key points */}
        <ul className="space-y-1.5">
          {c.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 text-indigo-400">&#8226;</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Portfolio details */}
        <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
          <h4 className="text-sm font-semibold text-gray-800">作品集 / 考核要求</h4>
          <div className="mt-2 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
            <div><span className="text-gray-500">数量：</span><span className="text-gray-700">{c.portfolio.pieces}</span></div>
            <div><span className="text-gray-500">侧重：</span><span className="text-gray-700">{c.portfolio.focus}</span></div>
            <div><span className="text-gray-500">提交方式：</span><span className="text-gray-700">{c.portfolio.platform}</span></div>
          </div>
          <p className="mt-2 text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1.5">{c.portfolio.tip}</p>
        </div>

        {/* Timeline */}
        <div className="mt-3 text-sm">
          <span className="font-medium text-gray-700">申请时间线：</span>
          <span className="text-gray-600">{c.timeline}</span>
        </div>
      </div>
    </div>
  )
}

function regionLabel(code: string): string {
  const map: Record<string, string> = {
    US: '\u{1F1FA}\u{1F1F8} 美国',
    UK: '\u{1F1EC}\u{1F1E7} 英国',
    CA: '\u{1F1E8}\u{1F1E6} 加拿大',
    AU: '\u{1F1E6}\u{1F1FA} 澳大利亚',
    HK: '\u{1F1ED}\u{1F1F0} 香港',
    SG: '\u{1F1F8}\u{1F1EC} 新加坡',
    CN: '\u{1F1E8}\u{1F1F3} 中国大陆',
  }
  return map[code] || code
}
