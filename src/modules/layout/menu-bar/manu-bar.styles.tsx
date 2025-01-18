import { cva } from 'class-variance-authority';

export const menuBarItemStyles = cva(
  [
    'p-3 flex items-center gap-3 rounded-lg transition-all hover:bg-gray-100 hover:opacity-90',
  ],
  {
    variants: {
      active: {
        true: 'text-white bg-active hover:bg-background-0',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);
