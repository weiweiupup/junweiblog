import Link from 'next/link';
import Image from 'next/image';
import { BlogCard } from '@/components/blog/BlogCard';
import { ProjectCard } from '@/components/project/ProjectCard';
import { TechStack } from '@/components/home/TechStack';
import { blogPosts, projects, authorInfo } from '@/lib/data';

export default function HomePage() {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 dark:bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySC0yNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 dark:opacity-50" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Avatar */}
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-xl opacity-50" />
            <Image
              src="https://ugc.same-assets.com/Hk5nWx9zic-f3knneoOxEIUH-YKHeWAt.jpeg"
              alt={authorInfo.name}
              fill
              className="relative rounded-full object-cover border-2 border-black/10 dark:border-white/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background flex items-center justify-center">
              <span className="block w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground text-lg">你好，我是</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">{authorInfo.name}</span>
            </h1>
            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
              <span className="text-gradient font-semibold glow-text">{authorInfo.title}</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {authorInfo.bio}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { label: '年经验', value: authorInfo.stats.yearsExp + '+' },
              { label: '项目', value: authorInfo.stats.projects + '+' },
              { label: '文章', value: authorInfo.stats.articles + '+' },
              { label: 'GitHub Stars', value: authorInfo.stats.stars },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white dark:text-black font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              <span className="flex items-center gap-2">
                阅读博客
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground font-medium hover:bg-black/10 dark:hover:bg-white/10 hover:border-teal-500/30 transition-all"
            >
              查看项目
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-black/[0.02] dark:via-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
                精选文章
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                最新技术分享
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-teal-500 dark:hover:text-teal-400 transition-colors group"
            >
              查看全部
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-6">
            {/* Featured large card */}
            <BlogCard post={featuredPosts[0]} featured />

            {/* Other featured cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.slice(1).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-teal-500 dark:text-teal-400"
            >
              查看全部文章
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-black/[0.02] dark:via-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
                项目展示
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                开源与商业项目
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-teal-500 dark:hover:text-teal-400 transition-colors group"
            >
              查看全部
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent border border-teal-500/20 p-12 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-[120px]" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                有项目想要合作？
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                无论是技术咨询、项目开发还是技术培训，都欢迎与我联系
              </p>
              <a
                href="mailto:821331897@qq.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white dark:text-black font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                发送邮件
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
