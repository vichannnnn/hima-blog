import { getPostContent } from '@util/postHelpers';
import ReactMarkdown from 'react-markdown';

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const { data, content } = getPostContent(slug);
  return (
    <div className='w-4/5 custom-markdown'>
      <h1 className='mb-8'>{data.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
