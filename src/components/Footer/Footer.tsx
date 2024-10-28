import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className=''>
      <Link href='/'>
        <Image src='https://image.himaa.me/hima-chan-sitting.png' alt='' height='128' width='128' />
      </Link>
      <p>© 2023 - 2024 Hima • Questions? Contact me at violet@himaa.me</p>
    </div>
  );
};
