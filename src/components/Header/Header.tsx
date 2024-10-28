import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className=''>
      <div className=''>
        <Link href='/' passHref>
          <Image
            src='https://image.himaa.me/hima-chan-original.png'
            alt='Hima!'
            height='128'
            width='128'
          />
        </Link>
      </div>
    </header>
  );
};
