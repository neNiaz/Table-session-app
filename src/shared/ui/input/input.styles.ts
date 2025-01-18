import { cva, VariantProps } from 'class-variance-authority';

export const inputStyles = cva(
  'inline-flex items-center relative focus:outline-none text-base w-full',
  {
    variants: {
      variant: {
        standard: 'border rounded-xl focus-within:border-primary p-2',
        filled: 'bg-white px-2.5',
      },
      size: {
        lg: '',
        md: '',
        sm: '',
      },
      isDisabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      isError: {
        true: 'border-orange hover:border-orange focus-within:border-orange',
      },
      isMobile: {
        true: 'mt-3 h-[52px]',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'standard',
    },
    compoundVariants: [
      {
        isError: true,
        variant: 'filled',
        className: 'border',
      },
      {
        variant: 'filled',
        size: 'md',
        className: 'rounded-lg',
      },
      {
        variant: 'filled',
        size: 'sm',
        className: 'rounded-md',
      },
      {
        variant: 'filled',
        size: 'lg',
        isMobile: false,
        className: 'rounded-lg',
      },
      {
        variant: 'standard',
        size: 'md',
        className: 'h-11 min-w-10',
      },
      {
        variant: 'standard',
        size: 'sm',
        className: 'h-9 min-w-8',
      },
      {
        variant: 'standard',
        size: 'lg',
        isMobile: false,
        className: 'h-12 min-w-12',
      },
      {
        variant: 'standard',
        isMobile: true,
        className: 'h-13 min-w-13',
      },
      {
        variant: 'standard',
        isMobile: false,
        className: 'border-divider',
      },
      {
        variant: 'standard',
        isMobile: true,
        className: 'border-outline-1',
      },
    ],
  },
);

export const inputElStyles = cva(
  'h-full w-full disabled:cursor-not-allowed font-medium autofill:bg-clip-text text-primary bg-transparent focus:outline-none focus:ring-0 focus:ring-transparent peer placeholder:font-medium ',
  {
    variants: {
      variant: {
        standard: 'focus:placeholder:opacity-100',
        filled: '',
      },
      size: {
        lg: '',
        md: '',
        sm: '',
      },
      isMobile: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'standard',
      size: 'md',
    },
    compoundVariants: [
      {
        size: 'lg',
        isMobile: false,
        className: 'placeholder:text-base text-base',
      },
      {
        size: 'md',
        isMobile: false,
        className: 'placeholder:text-sm text-sm',
      },
      {
        size: 'sm',
        isMobile: false,
        className: 'placeholder:text-sm text-sm',
      },
      {
        isMobile: true,
        className: 'placeholder:text-base text-base',
      },
    ],
  },
);

export const labelStyles = cva(
  'absolute peer-disabled:cursor-not-allowed left-0 text-secondary font-medium pointer-events-none',
  {
    variants: {
      variant: {
        standard: '',
        filled: 'hidden',
      },
      size: {
        lg: '',
        md: '',
        sm: '',
      },
      isLeftElement: {
        true: '',
        false: '',
      },
      isMobile: {
        true: '',
        false: '',
      },
      hasValue: {
        true: '',
        false: 'duration-300',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'standard',
    },
    compoundVariants: [
      {
        size: 'md',
        variant: 'standard',
        isLeftElement: false,
        isMobile: false,
        className: 'peer-placeholder-shown:text-sm peer-focus:text-xs text-xs',
      },
      {
        size: 'lg',
        variant: 'standard',
        isLeftElement: false,
        isMobile: false,
        className:
          'peer-placeholder-shown:text-base peer-focus:text-xs text-xs',
      },
      {
        variant: 'standard',
        isMobile: false,
        className:
          'transform -translate-y-5 top-3  origin-[0] peer-autofill:-translate-y-5 peer-focus:-translate-y-5',
      },
      {
        variant: 'standard',
        isMobile: true,
        className:
          'peer-placeholder-shown:text-base peer-focus:text-sm text-sm transform -translate-y-6 top-3.5  origin-[0] peer-autofill:-translate-y-6 peer-focus:-translate-y-6',
      },
      {
        variant: 'standard',
        isLeftElement: true,
        isMobile: false,
        className: 'peer-placeholder-shown:-translate-y-5 text-xs',
      },
      {
        variant: 'standard',
        isLeftElement: true,
        isMobile: true,
        className: 'peer-placeholder-shown:text-sm',
      },
      {
        variant: 'standard',
        isLeftElement: false,
        isMobile: true,
        className: 'peer-placeholder-shown:translate-y-0',
      },
      {
        variant: 'standard',
        isLeftElement: false,
        isMobile: false,
        className: 'peer-placeholder-shown:translate-y-0',
      },
    ],
  },
);

export type InputVariants = VariantProps<typeof inputStyles>;
