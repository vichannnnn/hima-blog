import Link from 'next/link';
import { MenuView } from '@components/Header/MenuView';

export const Header = () => {
  return (
    <header className='flex flex-row w-full text-center justify-center pt-4 pb-4'>
      <div className='flex w-4/5 justify-between items-center'>
        <div>
          <Link href='/' passHref>
            <img
              src='https://image.himaa.me/hima-chan-original.png'
              alt='Hima!'
              height='128'
              width='128'
            />
          </Link>
        </div>
        <h1 className='flex-1 text-center'>Hima&apos;s Blog</h1>
        <MenuView />
      </div>
    </header>
  );
};
