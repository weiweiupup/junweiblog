import { ProjectCard } from '@/components/project/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            项目
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            项目展示
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            精选的开源项目与商业案例，展示全栈开发的技术实践
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                想要查看更多项目？
              </h2>
              <p className="text-zinc-400 mb-6">
                访问我的 GitHub 主页查看所有开源项目
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium hover:bg-white/15 hover:border-teal-500/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                访问 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
