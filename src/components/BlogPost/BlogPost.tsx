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
}

export const BlogPost = ({ title, subtitle, slug, image, category, date }: BlogPost) => {
  return (
    <article key={slug}>
      <div className=''>
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
      <p className='pt-4'>
        {Intl.DateTimeFormat('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(new Date(date))}
      </p>
      <h3 className='min-h-2lh line-clamp-2'>{title}</h3>
      <p className='min-h-3lh line-clamp-3'>{subtitle}</p>
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
          className='flex justify-center mx-auto mt-4'
        >
          Read full article
        </Button>
      </Link>
    </article>
  );
};
