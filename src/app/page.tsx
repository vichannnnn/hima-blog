import { getListOfPosts } from '@util/postHelpers';
import { BlogPostsGrid } from '@components/BlogPost/BlogPostsGrid';

export default function Home() {
  const posts = getListOfPosts();
  console.log(posts);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 font-poppins'>
      <BlogPostsGrid posts={posts} />
    </main>
  );
}
