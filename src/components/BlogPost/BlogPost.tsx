import { Button } from '@components/Button';
import Link from 'next/link';

const NEXT_PUBLIC_AWS_CLOUDFRONT_URL = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL;

export interface BlogPost {
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  category: string;
  date: Date;
  tags: string[];
}

export const BlogPost = ({ title, subtitle, slug, image, category, date, tags }: BlogPost) => {
  return (
    <article key={slug}>
      <div>
        <Link href={`blog/${slug}`}>
          <img
            src={`${NEXT_PUBLIC_AWS_CLOUDFRONT_URL}${image}`}
            alt={title}
            style={{
              width: '100%',
              height: '320px',
              objectFit: 'cover',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          />
        </Link>
      </div>
      <div className=''>
        <p>
          {Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format(new Date(date))}
        </p>
      </div>

      <h2 className=''>{title}</h2>
      <p className=''>{subtitle}</p>
      <div className=''>
        <Link href={`blog/${slug}`}>
          <Button
            sx={{
              backgroundColor: '#b8e9f7',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#a6d2de',
                border: 'none',
              },
            }}
          >
            Read full article
          </Button>
        </Link>
      </div>
    </article>
  );
};
