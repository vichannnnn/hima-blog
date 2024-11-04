import { getPostContent } from '@util/postHelpers';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { data, content } = getPostContent(params.slug);
  return (
    <div className='w-4/5 custom-markdown'>
      <h1 className='mb-8'>{data.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
