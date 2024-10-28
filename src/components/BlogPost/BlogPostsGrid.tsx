import { BlogPost } from '@components/BlogPost/BlogPost';
import { getPostContent } from '@util/postHelpers';

interface BlogPostsGridProps {
  posts: string[];
}
export const BlogPostsGrid = ({ posts }: BlogPostsGridProps) => {
  return (
    <section>
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
            tags={data.tags}
          />
        );
      })}
    </section>
  );
};
