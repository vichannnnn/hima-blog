'use client';

import { useContext } from 'react';
import { DesktopMenu } from '@components/Header/DesktopMenu';
import { MobileDropdown } from '@components/Header/MobileDropdown';
import { MediaQueryContext } from '@providers/MediaQueryProvider';

export const MenuView = () => {
  const { isMedium } = useContext(MediaQueryContext);

  return (
    <>
      {isMedium ? (
        <DesktopMenu />
      ) : (
        <div className='flex items-center ml-auto mr-0'>
          <MobileDropdown />
        </div>
      )}
    </>
  );
};
