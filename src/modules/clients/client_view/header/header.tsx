import React from 'react';
import search from '../../../../../public/icons/search.svg';
import flash from '../../../../../public/icons/flash.svg';
import lines from '../../../../../public/icons/lines.svg';
import { Button } from '../../../../shared/ui/Button';
import { Input } from '../../../../shared/ui/input';

interface HeaderProps {
  title: string;
  onFilterChange: (value: string) => void;
  onCreateClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  onFilterChange,
  onCreateClick,
}) => {
  return (
    <div className={'flex justify-between items-center p-1 h-[70px]'}>
      <div>
        <span className={'font-bold text-lg'}>{title}</span>
      </div>
      <div className={'flex items-center gap-4 justify-center'}>
        <Input
          variant={'standard'}
          label={''}
          placeholder={'Поиск'}
          className={'!mt-0'}
          leftElement={<img src={search} alt="" />}
          onChange={(e) => onFilterChange(e.target.value)}
        />
        <div
          className={
            'w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600'
          }
        >
          <img src={flash} alt="" />
        </div>
        <div
          className={
            'w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600'
          }
        >
          <img src={lines} alt="" />
        </div>
        <Button size={'md'} onClick={onCreateClick}>
          Создать
        </Button>
      </div>
    </div>
  );
};
