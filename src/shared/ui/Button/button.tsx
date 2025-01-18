import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { buttonStyles, ButtonVariants } from './button.styles';
import { cn } from '../../hooks';

export * from './button.styles';

export interface ButtonProps
  extends ButtonVariants,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants> {
  /* Add loading indicator */
  isLoading?: boolean;

  /* Button children */
  children?: ReactNode;

  /* Left element */
  leftElement?: ReactNode;

  /* Right element */
  rightElement?: ReactNode;

  /* Full width */
  fullWidth?: boolean;

  classNames?: {
    rightElement?: string;
    leftElement?: string;
  };
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading,
      children,
      variant,
      size,
      color,
      className,
      leftElement,
      rightElement,
      classNames,
      fullWidth,
      disabled,
      withoutPadding,
      ...restProps
    },
    forwardedRef,
  ) => {
    const isDisabled = disabled || isLoading;

    const buttonContent = (
      <>
        {leftElement && (
          <div className={cn('mr-2', classNames?.leftElement)}>
            {leftElement}
          </div>
        )}
        {children}
      </>
    );
    return (
      <button
        className={buttonStyles({
          className,
          color,
          variant,
          size,
          fullWidth,
          withoutPadding,
        })}
        disabled={isDisabled}
        type="button"
        {...restProps}
        ref={forwardedRef}
      >
        {isLoading ? (
          <>
            <span>Loading...</span>
            <div className="inline-flex opacity-0 relative max-h-full">
              {buttonContent}
            </div>
          </>
        ) : (
          buttonContent
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
