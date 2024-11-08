import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex flex-col mx-auto items-center pb-16'>
      <Link href='/'>
        <img src='https://image.himaa.me/hima-chan-sitting.png' alt='' height='128' width='128' />
      </Link>
      <p>© 2023 - {currentYear} Hima • Questions? Contact me at violet@himaa.me</p>
    </div>
  );
};
