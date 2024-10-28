import { getPostContent } from '@util/postHelpers';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { content } = getPostContent(params.slug);
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
