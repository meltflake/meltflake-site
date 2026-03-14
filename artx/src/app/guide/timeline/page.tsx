import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '申请时间线',
  description: '从九年级到十二年级的艺术院校申请完整时间线和准备规划。',
}

const timeline = [
  {
    grade: '九年级',
    theme: '基础建设年',
    color: 'bg-emerald-500',
    semesters: [
      {
        name: '秋季（9-12月）',
        tasks: [
          '每周进行素描和水彩练习，建立基础',
          '开始尝试观察性绘画（从想象转向直接观察）',
          '学习基础色彩理论',
          '为所有完成作品拍摄高质量照片',
          '研究不同艺术院校和专业方向',
          '保持良好的整体 GPA',
        ],
      },
      {
        name: '春季（1-6月）',
        tasks: [
          '尝试新媒介（丙烯、炭笔、彩色铅笔等）',
          '学习基础构图原则',
          '创建第一批"作品集质量"作品（2-3件）',
          '学习如何专业拍摄艺术作品',
        ],
      },
      {
        name: '暑假',
        tasks: [
          '参加暑期艺术工作坊或夏令营',
          '创作 3-5 件新作品',
          '访问艺术博物馆和画廊',
          '开始学习艺术史基础',
        ],
      },
    ],
  },
  {
    grade: '十年级',
    theme: '探索和发展年',
    color: 'bg-blue-500',
    semesters: [
      {
        name: '秋季（9-12月）',
        tasks: [
          '增加练习难度，学习人体解剖和比例',
          '探索版画、雕塑或其他 3D 媒介',
          '发展个人艺术风格和兴趣方向',
          '创作第一个小型系列作品（3-4件相关作品）',
          '列出 15-20 所感兴趣的艺术院校',
          '决定是否选修 IB 视觉艺术（SL 或 HL）',
        ],
      },
      {
        name: '春季（1-6月）',
        tasks: [
          '开始发展个人主题或概念',
          '创作更具概念性的作品',
          '目标创作 10-12 件新的作品集质量作品',
          '参加学校或当地艺术展览',
        ],
      },
      {
        name: '暑假',
        tasks: [
          '参加知名院校的 Pre-College 暑期项目',
          '开始缩小目标学校到 8-12 所',
          '创作5-8件新作品，重点提升质量',
          '参加 National Portfolio Day 获取反馈',
        ],
      },
    ],
  },
  {
    grade: '十一年级',
    theme: '密集准备年',
    color: 'bg-indigo-500',
    semesters: [
      {
        name: '秋季（9-12月）',
        tasks: [
          '完成作品集的主体部分（12-20 件作品）',
          '确保作品集展示多样性和个人声音',
          '参加作品集评审和工作坊',
          '确定最终选校名单（8-12 所）',
          '开始撰写艺术家陈述（Artist Statement）',
          '如果选修 IB 视觉艺术，充分利用课程',
        ],
      },
      {
        name: '春季（1-6月）',
        tasks: [
          '精炼和编辑作品集',
          '淘汰较弱作品，替换为更强作品',
          '准备标准化考试（如需要）',
          '参加更多 Portfolio Day 获取反馈',
          '开始准备 Common Application 文书',
        ],
      },
      {
        name: '暑假',
        tasks: [
          '完成作品集的最终选择和摄影',
          '完善艺术家陈述',
          '准备申请文书初稿',
          '联系推荐人（艺术老师和学术老师）',
          '如有可能，访问目标学校',
        ],
      },
    ],
  },
  {
    grade: '十二年级',
    theme: '申请冲刺年',
    color: 'bg-rose-500',
    semesters: [
      {
        name: '秋季（9-11月）',
        tasks: [
          '完成 Common Application 和各校补充申请',
          '上传作品集到 SlideRoom 或各校平台',
          '提交早期申请（ED/EA: 11月1日-15日）',
          '确保所有推荐信已提交',
          '完成财务援助申请（FAFSA/CSS Profile）',
        ],
      },
      {
        name: '冬季（12-1月）',
        tasks: [
          '提交常规申请（RD: 1月3日-2月1日）',
          '完成所有补充材料',
          '参加面试（如学校要求）',
          '继续创作新作品（展示持续发展）',
        ],
      },
      {
        name: '春季（2-5月）',
        tasks: [
          '等待录取结果（3-4月）',
          '比较 offer 和财务援助方案',
          '参加录取学校的访问日',
          '5月1日前确认入学（Decision Day）',
          '完成入学手续和宿舍申请',
        ],
      },
    ],
  },
]

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/guide" className="text-sm text-indigo-600 hover:underline">&larr; 返回申请指南</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">申请时间线</h1>
      <p className="mt-2 text-gray-600">从九年级到十二年级的完整准备规划，让申请有条不紊。</p>

      <div className="mt-10 space-y-12">
        {timeline.map((year, yi) => (
          <div key={yi} className="relative">
            {/* Year header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-10 w-10 rounded-full ${year.color} flex items-center justify-center text-white font-bold text-sm`}>
                {yi + 1}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{year.grade}</h2>
                <p className="text-sm text-gray-500">{year.theme}</p>
              </div>
            </div>

            {/* Semesters */}
            <div className="ml-5 border-l-2 border-gray-200 pl-8 space-y-6">
              {year.semesters.map((sem, si) => (
                <div key={si}>
                  <h3 className="font-semibold text-gray-800">{sem.name}</h3>
                  <ul className="mt-2 space-y-1.5">
                    {sem.tasks.map((task, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
