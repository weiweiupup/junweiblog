import { BlogCard } from '@/components/blog/BlogCard';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';

// Get unique tags from all posts
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            博客
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            技术文章
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            分享全栈开发、云原生、架构设计等领域的技术心得与实践经验
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-teal-500/10 border-teal-500/30 text-teal-400 cursor-pointer hover:bg-teal-500/20 transition-colors"
            >
              全部
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-white/5 border-white/10 text-zinc-400 cursor-pointer hover:border-teal-500/30 hover:text-teal-400 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
