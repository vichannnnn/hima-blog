import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BlogPost, getBlogPost } from '@api/blog';
import { Description, Title } from '@components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-light.css';
import './FullBlogPost.css';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={materialDark} language={match[1]} PreTag='div' {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export const FullBlogPost = () => {
  const { blog_id } = useParams();
  const [blogPostData, setBlogPostData] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const data = await getBlogPost(Number(blog_id));
        setBlogPostData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching blog post data', error);
      }
    };

    if (blog_id) {
      fetchBlogPost().catch((err) => {
        console.error('Failed to fetch blog post:', err);
      });
    }
  }, []);

  return (
    <>
      {!isLoading && (
        <div className='full-blog-post-container'>
          <Title className='full-blog-post-title'>{blogPostData?.title}</Title>
          <Description className='full-blog-post-date'>
            Post created on{' '}
            {blogPostData &&
              Intl.DateTimeFormat('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format(new Date(blogPostData?.date_posted))}
          </Description>
          <div className='content-container'>
            <div
              className='markdown-body'
              style={{
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                fontSize: '16px',
                lineHeight: '1.6',
                marginTop: '1rem',
              }}
            >
              <ReactMarkdown
                components={{ code: CodeBlock }}
                remarkPlugins={[remarkGfm]}
                children={blogPostData?.content}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};