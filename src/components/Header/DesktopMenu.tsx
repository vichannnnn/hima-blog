import Link from 'next/link';
import { Button } from '@components/Button';

export const DesktopMenu = () => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Link href='/' passHref>
        <Button>Home</Button>
      </Link>
      <Link href='https://himaa.me' passHref>
        <Button>About Me</Button>
      </Link>
    </div>
  );
};
