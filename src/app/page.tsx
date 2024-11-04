import { getListOfPosts } from '@util/postHelpers';
import { BlogPostsGrid } from '@components/BlogPost/BlogPostsGrid';

export default function Home() {
  const posts = getListOfPosts();

  return (
    <main className='flex min-h-screen w-4/5 flex-col items-center justify-between p-8'>
      <BlogPostsGrid posts={posts} />
    </main>
  );
}
