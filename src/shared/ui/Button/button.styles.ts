import { cva, VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'inline-flex items-center relative  focus-visible:outline-none justify-center disabled:opacity-40 disabled:cursor-not-allowed relative font-semibold',
  ],
  {
    variants: {
      size: {
        sm: 'h-8 min-w-8 text-sm',
        md: 'h-10 min-w-10 text-sm',
        lg: 'h-14 min-w-12 text-base',
        custom: '',
      },
      color: {
        white: 'bg-white text-brand ring-brand border-brand',
        black: 'bg-white text-black ring-brand border-brand',
        brand: 'bg-brand text-white ring-brand border-brand',
        brandLight:
          'bg-brand-disabled text-white ring-brand-disabled border-brand-disabled',
        brandDark:
          'bg-brand-hover text-white ring-brand-hover border-brand-hover',
        custom: '',
      },
      variant: {
        solid: ['hover:opacity-90 focus:ring-2 ring-offset-2 '],
        outline: [
          'hover:opacity-90 border border-slate-200 focus:ring-2 ring-offset-2 ',
        ],
        text: [
          'hover:bg-brand  [&:not([disabled])]:[&:not([aria-selected])]:hover:bg-opacity-5 active:bg-opacity-20 active:bg-brand focus:!ring-0 focus:!border-0 disabled:bg-slate-900 disabled:bg-opacity-10',
        ],
        unstyled: ['focus:!ring-0'],
      },
      fullWidth: {
        true: 'w-full',
      },
      withoutPadding: {
        true: 'px-0',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'lg',
      color: 'brand',
      withoutPadding: false,
    },
    compoundVariants: [
      {
        variant: 'text',
        color: ['brand', 'brandLight', 'brandLight', 'white'],
        className: 'bg-transparent',
      },
      {
        variant: ['solid', 'outline', 'text'],
        size: ['md', 'sm'],
        className: 'rounded-lg',
      },
      {
        variant: ['solid', 'outline', 'text'],
        size: 'lg',
        className: 'rounded-lg',
      },
      {
        size: ['sm', 'md'],
        withoutPadding: false,
        className: 'px-4',
      },
      {
        size: 'lg',
        withoutPadding: false,
        className: 'px-6',
      },
    ],
  },
);

export type ButtonVariants = VariantProps<typeof buttonStyles>;
