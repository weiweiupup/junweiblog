import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/data';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/[0.03] dark:from-white/[0.07] to-transparent border border-black/10 dark:border-white/10 hover:border-teal-500/30 transition-all duration-500 hover-lift">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 dark:to-black/50 md:bg-gradient-to-r md:from-transparent md:to-white/80 dark:md:to-black/80" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mb-3 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="font-mono">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-black/[0.02] dark:from-white/[0.05] to-transparent border border-black/10 dark:border-white/10 hover:border-teal-500/30 transition-all duration-300 hover-lift">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-muted-foreground text-[10px] px-2 py-0"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-mono">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
