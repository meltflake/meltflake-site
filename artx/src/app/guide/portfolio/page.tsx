import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '作品集指南',
  description: '艺术院校作品集准备的 10 个关键技巧和必须避免的常见错误。',
}

const tips = [
  { title: '仔细阅读每所学校的具体要求', desc: '每所学校对作品集都有自己的要求——作品数量、格式、截止日期等。确保你的作品集提交满足每一项要求。' },
  { title: '有效组织作品', desc: '你在作品集中安排不同作品的方式反映了你的呈现技能和思维过程。以强有力的作品开始，中间展示范围和多样性，以成熟的作品结束。' },
  { title: '写清晰简洁的标签', desc: '标题、日期和媒介描述是标准的。如果需要更多信息，详细说明但不要过度。' },
  { title: '准备好讨论每件作品', desc: '你可能需要在面试中回答问题或解释作品的某些部分。重新审视作品并记住它们的创作过程。' },
  { title: '讲述故事', desc: '展示你的技术能力很重要，但你也应该包含展示你叙事技能的作品。将意义与使你独特的经历联系起来。' },
  { title: '质量永远优先于数量', desc: '不要过度关注作品集中有多少作品。更多作品可能有帮助，但不能以牺牲质量标准为代价。' },
  { title: '获取外部专业建议', desc: '向值得信赖的艺术导师寻求反馈。参加 National Portfolio Day 是获得作品集反馈的好方法。注意：家人朋友的反馈往往不够专业。' },
  { title: '展示你的技术能力', desc: '技术技能是传达作品信息的工具。艺术学校想看到可以在学校继续发展的基础技术水平。' },
  { title: '不要选择陈词滥调的例子', desc: '避免：正面自画像空白背景、水果花卉静物、日落风景、眼睛嘴唇特写。这些太常见了。' },
  { title: '展示你想如何发展', desc: '如果有你想引导未来艺术职业的领域——例如动画或平面设计——在作品集中包含这些类型的作品。' },
]

const mistakes = [
  { title: '照片写实主义——逐字复制照片', desc: '如果你的最终目标是让绘画看起来就像照片，为什么不直接拍照？绘画不是关于准确性，而是关于表达。', type: 'error' },
  { title: '动漫、粉丝艺术、名人绘画、大师临摹', desc: '这些作品可以作为个人练习，但大多数艺术学校不想在作品集中看到它们。它们不展示原创性。', type: 'error' },
  { title: '糟糕的照片是致命伤', desc: '拍摄不佳的照片可能完全歪曲你的艺术作品。注意背景、照明、色彩和焦点。', type: 'error' },
  { title: '通用图像和空白背景', desc: '具体化并避免通用图像。背景使你的艺术更好——即使是简单的背景也能增添深度。', type: 'error' },
  { title: '居中构图', desc: '居中构图是默认方式。学习使用三分法则和其他构图技巧，让作品更有视觉张力。', type: 'error' },
  { title: '未完成的艺术作品', desc: '不要在作品集中包含未完成的作品。呈现可以在画廊展出的完成作品。', type: 'error' },
  { title: '一张幻灯片塞入太多图像', desc: '每张幻灯片应该清楚地展示一件作品或一个相关作品组，不要让人难以专注。', type: 'error' },
  { title: '"饼干切割器"课堂项目', desc: '删除那些课堂上每个学生都做过的相同项目。展示你在自己时间创作的、更能反映个人创意视野的作品。', type: 'error' },
]

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/guide" className="text-sm text-indigo-600 hover:underline">&larr; 返回申请指南</Link>

      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">作品集指南</h1>
      <p className="mt-2 text-gray-600">帮你准备一份脱颖而出的作品集。</p>

      {/* Tips */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">10 个关键技巧</h2>
        <div className="space-y-4">
          {tips.map((tip, i) => (
            <div key={i} className="rounded-lg border border-green-200 bg-green-50 p-4">
              <h3 className="font-semibold text-green-900">
                <span className="mr-2 text-green-600">✓</span>
                {i + 1}. {tip.title}
              </h3>
              <p className="mt-1 text-sm text-green-800">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mistakes */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">必须避免的常见错误</h2>
        <div className="space-y-4">
          {mistakes.map((m, i) => (
            <div key={i} className="rounded-lg border border-red-200 bg-red-50 p-4">
              <h3 className="font-semibold text-red-900">
                <span className="mr-2 text-red-600">✗</span>
                {m.title}
              </h3>
              <p className="mt-1 text-sm text-red-800">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photography tips */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">作品拍摄要点</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {['使用高分辨率图像', '确保照明均匀充足', '使用中性背景（白色或灰色）', '确保焦点清晰', '适当裁剪，不要有不必要的边缘', '遵循学校指定的文件格式（JPEG/PNG）'].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 text-indigo-500">●</span>
              {tip}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
