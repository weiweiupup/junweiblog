import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { authorInfo, techStack } from '@/lib/data';

const timeline = [
  {
    year: '2024 - 至今',
    title: '高级全栈工程师',
    company: '科技公司',
    description: '负责核心产品架构设计与技术选型，带领团队完成多个大型项目',
  },
  {
    year: '2020 - 2024',
    title: '全栈开发工程师',
    company: '互联网公司',
    description: '参与多个 SaaS 产品的开发，负责前后端全栈开发与运维',
  },
  {
    year: '2018 - 2020',
    title: '前端开发工程师',
    company: '创业公司',
    description: '从零搭建前端技术体系，推动团队技术升级与流程优化',
  },
];

const certifications = [
  'AWS Solutions Architect',
  'Google Cloud Professional',
  'Kubernetes Administrator (CKA)',
  'MongoDB Developer',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src={authorInfo.avatar}
                    alt={authorInfo.name}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-teal-500 text-black font-medium text-sm shadow-lg shadow-teal-500/30">
                  8+ 年经验
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
                关于我
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {authorInfo.name}
              </h1>
              <p className="text-xl text-gradient font-semibold mb-6">
                {authorInfo.title}
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {authorInfo.bio}
              </p>

              {/* Quick info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-zinc-400">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{authorInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{authorInfo.email}</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href={authorInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/50 flex items-center justify-center text-zinc-400 hover:text-teal-400 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={authorInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/50 flex items-center justify-center text-zinc-400 hover:text-teal-400 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* <a
                  href={authorInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/50 flex items-center justify-center text-zinc-400 hover:text-teal-400 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
              职业经历
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              成长轨迹
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-8 md:pl-0 md:grid md:grid-cols-12 gap-6">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-teal-400 md:left-1/2 md:-translate-x-1/2" />

                {/* Year - left side on desktop */}
                <div className={`hidden md:block md:col-span-5 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <span className="text-teal-400 font-mono text-sm">{item.year}</span>
                </div>

                {/* Content - right side on desktop */}
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:col-start-7' : 'md:order-1 md:text-right'}`}>
                  <span className="text-teal-400 font-mono text-sm md:hidden">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-zinc-400 font-medium mb-2">{item.company}</p>
                  <p className="text-zinc-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
              技能
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              技术能力
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div
                key={category}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                  {category === 'frontend' ? '前端开发' : category === 'backend' ? '后端开发' : 'DevOps'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-zinc-400"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
              认证
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              专业认证
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center hover:border-teal-500/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent border border-teal-500/20 p-12 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                让我们一起创造价值
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                如果你有任何问题或合作意向，欢迎随时联系我
              </p>
              <a
                href={`mailto:${authorInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
