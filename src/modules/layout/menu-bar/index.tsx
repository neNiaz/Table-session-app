import React, { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { menuBarItemStyles } from './manu-bar.styles';
import { cn } from '../../../shared/hooks';
import { Link } from 'react-router-dom';
import logo from '../../../../public/icons/logo.svg';
import logout from '../../../../public/icons/logout.svg';
import arrow from '../../../../public/icons/arrow.svg';
import { CountriesSelect } from '../../../shared/ui/select';
import { Button } from '../../../shared/ui/Button';

interface MenuItem {
  href: string;
  title: string;
  visibleMobile?: boolean;
  icon?: React.ReactNode;
  key: symbol;
}

interface Props {
  menuItems: MenuItem[];
  isMobile?: boolean;
}

const LogoSection: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => (
  <div className="w-full relative">
    <div className="flex justify-center items-center mb-8">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'text-black font-bold text-[1.5rem] leading-10',
            'whitespace-nowrap overflow-hidden',
          )}
        >
          {!isCollapsed && 'Сим Центр'}
        </motion.span>
      </div>
    </div>
  </div>
);

const MenuItems: React.FC<{ menuItems: MenuItem[]; isCollapsed: boolean }> = ({
  menuItems,
  isCollapsed,
}) => (
  <div className="w-full mb-2 gap-1.5 flex flex-col">
    {menuItems.map((item, index) => (
      <Link
        key={index}
        to={item.href}
        className={cn(
          menuBarItemStyles({
            active: window.location.pathname.toLowerCase() === item.href,
          }),
          'cursor-pointer flex items-center gap-2 whitespace-nowrap max-h-[2.5rem]',
        )}
      >
        {item.icon}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-base font-medium overflow-hidden"
        >
          {!isCollapsed && item.title}
        </motion.span>
      </Link>
    ))}
  </div>
);

const UserInfo: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => (
  <motion.div
    className="flex-1 flex flex-col items-start justify-end gap-4 text-nowrap overflow-hidden"
    initial={{ opacity: isCollapsed ? 0 : 1 }}
    animate={{ opacity: isCollapsed ? 0 : 1 }}
    transition={{ duration: 0.1, ease: 'easeInOut' }}
  >
    <div
      className={
        'w-full shadow-md bg-white py-4 px-2 rounded-lg flex justify-between gap-2'
      }
    >
      <div className="flex flex-col">
        <span className="font-bold text-sm max-w-[160px] truncate">
          Барнаби Мармадюк
        </span>
        <span className="text-gray-500 text-sm">Преподаватель</span>
      </div>
      <div>
        <div
          className={
            'rounded-full bg-blue-700 h-8 w-8 flex items-center justify-center'
          }
        >
          <span className={'text-white text-xs'}>МБ</span>
        </div>
      </div>
    </div>
    <motion.div
      className={'w-full text-nowrap'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isCollapsed ? 0 : 1,
      }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      <Button
        variant={'text'}
        color={'black'}
        className={'text-start !justify-start items-start w-full !px-0'}
        leftElement={<img src={logout} alt={''} />}
      >
        Выйти
      </Button>
      <CountriesSelect />
    </motion.div>
    <span className={'text-gray-500 text-xs'}>Версия 1.02</span>
  </motion.div>
);

export const MenuBar: React.FC<Props> = ({ menuItems }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const id = useId();

  return (
    <motion.aside
      className={cn(
        'flex-col bg-white relative flex ',
        'pl-6 pr-3 py-8 sticky top-0 sm:flex h-screen z-50',
      )}
      initial={{ width: isCollapsed ? 90 : 350 }}
      animate={{ width: isCollapsed ? 90 : 350 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <LogoSection isCollapsed={isCollapsed} />
      <Button
        variant={'text'}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={'!absolute right-[-25px] z-[100] !p-0 hover:bg-transparent'}
      >
        <motion.span
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={arrow} alt="arrow" />
        </motion.span>
      </Button>
      <MenuItems key={id} menuItems={menuItems} isCollapsed={isCollapsed} />
      <UserInfo isCollapsed={isCollapsed} />
    </motion.aside>
  );
};
