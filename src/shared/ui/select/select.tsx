import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import arrowSelect from '../../../../public/icons/arrow_select.svg';

const countries = [
  {
    name: 'Россия',
    flags: {
      svg: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
    },
  },
  {
    name: 'США',
    flags: {
      svg: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    },
  },
  {
    name: 'Германия',
    flags: {
      svg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    },
  },
];

export function CountriesSelect() {
  return (
    <div className="w-full relative">
      <Select
        size="lg"
        placeholder="Select Country"
        arrow={''}
        selected={(element) => {
          return (
            element &&
            React.cloneElement(element, {
              disabled: true,
              className:
                'flex border-transparent center opacity-100 px-0 gap-2 pointer-events-none outline-none relative',
            })
          );
        }}
        onChange={() => console.log('changed')}
        value={countries[0].name}
        className={
          'outline-slate-300 outline-0 flex justify-between p-3 rounded-xl drop-shadow-none font-medium'
        }
      >
        {countries.map(({ name, flags }) => (
          <Option
            key={name}
            value={name}
            className="flex items-center font-bold gap-2 my-2 outline-none"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-5 w-5 rounded-md object-cover"
            />
            {name}
          </Option>
        ))}
      </Select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <img src={arrowSelect} alt="" />
      </span>
    </div>
  );
}
