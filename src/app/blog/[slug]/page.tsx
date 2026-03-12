import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { blogPosts, authorInfo } from '@/lib/data';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-[#0a0a0a]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">首页</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-400 transition-colors">博客</Link>
            <span>/</span>
            <span className="text-zinc-500 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-teal-500/10 border-teal-500/30 text-teal-400"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={authorInfo.avatar}
                alt={authorInfo.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-medium text-sm">{authorInfo.name}</p>
                <p className="text-zinc-500 text-xs">{authorInfo.title}</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-8 bg-white/10" />
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span className="font-mono">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-teal max-w-none">
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="whitespace-pre-wrap text-zinc-300 leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </section>

      {/* Share & Tags */}
      <section className="py-8 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-zinc-400"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-500">分享至：</span>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal-500/20 flex items-center justify-center text-zinc-400 hover:text-teal-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal-500/20 flex items-center justify-center text-zinc-400 hover:text-teal-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">相关文章</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition-colors"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-2 font-mono">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            返回博客列表
          </Link>
        </div>
      </section>
    </article>
  );
}
