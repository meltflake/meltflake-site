import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '面试技巧',
  description: '艺术院校面试准备全攻略：常见面试形式、高频问题、作品集讲解技巧和注意事项。',
}

const interviewFormats = [
  {
    type: '作品集面试（Portfolio Interview）',
    desc: '最常见的形式。面试官会和你一起浏览你的作品集，要求你讲解创作过程、灵感来源和技术选择。',
    schools: 'RISD、Pratt、SAIC、MICA 等',
    duration: '15-30 分钟',
  },
  {
    type: '综合面试（General Interview）',
    desc: '除了作品集，还会讨论你的学术兴趣、课外活动、为什么选择这所学校等。更像传统的大学面试。',
    schools: 'CMU、Parsons、部分综合大学的艺术学院',
    duration: '20-45 分钟',
  },
  {
    type: 'National Portfolio Day',
    desc: '全美各地举办的艺术院校招生活动。你可以带作品集获得多所学校招生官的当面反馈，虽然不算正式面试，但印象分很重要。',
    schools: '大部分美国艺术院校参加',
    duration: '每所学校 10-15 分钟',
  },
  {
    type: '线上面试（Virtual Interview）',
    desc: '通过 Zoom 或学校自有平台进行。疫情后越来越普遍，国际学生常用此方式。需注意网络稳定和背景环境。',
    schools: 'UAL、Goldsmiths、大部分学校提供此选项',
    duration: '15-30 分钟',
  },
]

const commonQuestions = [
  {
    category: '关于你的作品',
    questions: [
      '请介绍一件你最满意的作品，为什么？',
      '这件作品的创作过程是怎样的？',
      '你在创作中遇到了什么挑战，如何解决的？',
      '你使用了哪些媒介和技术？为什么选择它们？',
      '如果有更多时间，你会如何改进这件作品？',
    ],
  },
  {
    category: '关于你自己',
    questions: [
      '你是如何对艺术产生兴趣的？',
      '哪些艺术家或设计师对你影响最大？',
      '你在课外有哪些艺术相关的活动或项目？',
      '描述一次你用创造性思维解决问题的经历。',
      '你未来 5 年的职业规划是什么？',
    ],
  },
  {
    category: '关于学校',
    questions: [
      '你为什么选择我们学校？',
      '你对哪个专业方向或教授的研究最感兴趣？',
      '你希望在大学期间获得什么？',
      '你了解我们学校的哪些课程或项目？',
      '你打算如何利用学校的资源（工作室、设备等）？',
    ],
  },
]

const portfolioTalkTips = [
  {
    title: '讲故事，不要读说明',
    desc: '不要机械地描述"这是用水彩画的静物"。要讲创作背后的故事：为什么选这个题材？过程中有什么发现？',
  },
  {
    title: '展示思考过程',
    desc: '面试官更关心你的思考方式而非最终成果。准备好解释你的设计决策、方案迭代和问题解决过程。',
  },
  {
    title: '诚实面对不足',
    desc: '被问到"如何改进"时，诚实回答展示自我反思能力。说"我会调整构图的重心"比"我觉得已经很完美了"好得多。',
  },
  {
    title: '连接不同作品',
    desc: '找到作品之间的主题线索或发展脉络。展示你的艺术探索不是零散的，而是有方向性的成长。',
  },
  {
    title: '准备 Sketchbook',
    desc: '很多学校会问你有没有速写本。带上你的 Sketchbook 能展示你的日常观察和思维过程，这对面试官非常有吸引力。',
  },
  {
    title: '用英语练习专业术语',
    desc: '提前熟悉常用的艺术术语英文表达：composition（构图）、color palette（色彩方案）、negative space（留白）、contrast（对比）等。',
  },
]

const doAndDont = {
  do: [
    '提前研究学校的课程设置、师资和学生作品',
    '准备 2-3 个向面试官提问的好问题',
    '穿着整洁得体，展示你的个人风格但不要过于夸张',
    '比预定时间提前 10 分钟到达（线上面试提前 5 分钟上线测试设备）',
    '带上实体作品集或在平板上准备好高清作品图',
    '面试结束后 24 小时内发送感谢邮件',
    '保持微笑和眼神交流，展示你的热情',
    '线上面试确保光线充足、背景整洁、网络稳定',
  ],
  dont: [
    '不要背诵准备好的答案，要自然对话',
    '不要贬低其他学校或项目',
    '不要说"我什么都想学"——展示你有明确的方向',
    '不要只说结果不说过程——创作过程才是重点',
    '不要紧张到忘记提问——这是双向交流的机会',
    '不要迟到，也不要太早到（线下面试）',
    '不要在面试中查看手机',
    '不要在作品讲解中道歉（"这个画得不太好"）',
  ],
}

const prepTimeline = [
  { time: '面试前 4 周', tasks: ['研究学校信息：课程、教授、学生作品、校园文化', '确定要重点展示的 5-8 件作品'] },
  { time: '面试前 2-3 周', tasks: ['写下每件作品的讲解要点（不超过 2 分钟/件）', '准备"为什么选这所学校"的回答', '列出要问面试官的问题'] },
  { time: '面试前 1 周', tasks: ['和老师、朋友做模拟面试', '用英语练习作品讲解', '确认面试时间、地点或线上链接'] },
  { time: '面试前 1 天', tasks: ['准备好所有材料（作品集、Sketchbook、简历）', '确认交通路线或测试线上设备', '早睡，保证充足睡眠'] },
  { time: '面试当天', tasks: ['检查着装和材料', '提前到达或上线', '深呼吸，保持自信和微笑'] },
]

export default function InterviewPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/guide" className="text-sm text-indigo-600 hover:underline">&larr; 返回申请指南</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">面试技巧</h1>
      <p className="mt-2 text-gray-600">充分准备，自信展示你的艺术热情和创作能力。</p>

      {/* Interview Formats */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">常见面试形式</h2>
        <div className="space-y-4">
          {interviewFormats.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900">{f.type}</h3>
              <p className="mt-1 text-sm text-gray-700">{f.desc}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                <span>🏫 {f.schools}</span>
                <span>⏱ {f.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Questions */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">高频面试问题</h2>
        <p className="mb-4 text-sm text-gray-600">以下问题按类别整理，建议每个类别都准备好回答思路（不需要逐字背诵）。</p>
        <div className="space-y-6">
          {commonQuestions.map((cat, i) => (
            <div key={i}>
              <h3 className="mb-2 font-semibold text-indigo-800">{cat.category}</h3>
              <ul className="space-y-1.5 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
                {cat.questions.map((q, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 text-indigo-400">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Talk Tips */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">作品集讲解技巧</h2>
        <p className="mb-4 text-sm text-gray-600">面试的核心是围绕你的作品展开对话。掌握这些技巧能让你脱颖而出。</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioTalkTips.map((tip, i) => (
            <div key={i} className="rounded-lg border border-violet-200 bg-violet-50 p-4">
              <h3 className="font-semibold text-violet-900">{tip.title}</h3>
              <p className="mt-1 text-sm text-violet-800">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Do and Don't */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">面试注意事项</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-5">
            <h3 className="mb-3 font-semibold text-green-900">✓ 应该做的</h3>
            <ul className="space-y-2">
              {doAndDont.do.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                  <span className="mt-0.5 text-green-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-5">
            <h3 className="mb-3 font-semibold text-red-900">✗ 不要做的</h3>
            <ul className="space-y-2">
              {doAndDont.dont.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                  <span className="mt-0.5 text-red-500">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prep Timeline */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-gray-900">面试准备时间线</h2>
        <div className="space-y-3">
          {prepTimeline.map((step, i) => (
            <div key={i} className="flex gap-4 rounded-lg border border-gray-100 bg-white p-4">
              <div className="w-28 flex-shrink-0">
                <span className="text-sm font-semibold text-indigo-700">{step.time}</span>
              </div>
              <ul className="space-y-1">
                {step.tasks.map((t, j) => (
                  <li key={j} className="text-sm text-gray-700">• {t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Reminder */}
      <section className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h3 className="font-semibold text-amber-900">核心提醒</h3>
        <p className="mt-2 text-sm text-amber-800">
          面试不是考试，而是一次对话。面试官想了解的是你这个人——你的思考方式、创作热情和成长潜力。
          最好的准备就是真正了解自己的作品和选校原因，然后自然地表达出来。
          记住：他们已经看过你的作品集了，面试是让他们认识作品背后的你。
        </p>
      </section>
    </div>
  )
}
