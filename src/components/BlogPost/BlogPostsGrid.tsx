import { BlogPost } from '@components/BlogPost/BlogPost';
import { getPostContent } from '@util/postHelpers';

interface BlogPostsGridProps {
  posts: string[];
}
export const BlogPostsGrid = ({ posts }: BlogPostsGridProps) => {
  return (
    <section>
      <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {posts.map((post) => {
          const { data } = getPostContent(post.replace('.mdx', ''));

          return (
            <BlogPost
              key={data.slug}
              title={data.title}
              subtitle={data.subtitle}
              slug={data.slug}
              image={data.image}
              category={data.category}
              date={new Date(data.date)}
            />
          );
        })}
      </div>
    </section>
  );
};
