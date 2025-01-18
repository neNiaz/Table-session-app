import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import {
  inputElStyles,
  inputStyles,
  InputVariants,
  labelStyles,
} from './input.styles';
import { cn } from '../../hooks';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputVariants>,
    InputVariants {
  /* The native HTML `size` attribute to be passed to the `input`*/
  htmlSize?: number;

  /* Left input element */
  leftElement?: ReactNode;

  /* Right input element */
  rightElement?: ReactNode;

  /* Error message*/
  errorMessage?: string;

  isError?: boolean;

  fullWidth?: boolean;

  label: string;

  isMobile?: boolean;

  onCommit?: (value: InputHTMLAttributes<HTMLInputElement>['value']) => void;
  commitTime?: number;

  classNames?: {
    leftElement?: string;
    rightElement?: string;
    label?: string;
    input?: string;
    errorMessage?: string;
  };
}

let timer: number;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      variant,
      htmlSize,
      leftElement,
      rightElement,
      errorMessage,
      disabled,
      fullWidth,
      isDisabled,
      label,
      classNames,
      isError,
      isMobile = false,
      onCommit,
      onChange,
      value,
      commitTime = 500,
      ...restProps
    },
    forwardedRef,
  ) => {
    const [inputValue, setInputValue] = useState<InputProps['value']>('');

    useEffect(() => {
      if (onCommit) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => onCommit(inputValue), commitTime);
      }
    }, [inputValue]);

    useEffect(() => {
      if (value !== undefined && value !== inputValue && onCommit) {
        setInputValue(value);
      }
    }, [value]);

    return (
      <div className={cn('relative flex flex-col mt-2', fullWidth && 'w-full')}>
        <div
          className={inputStyles({
            className,
            size,
            variant,
            isError,
            isMobile,
            isDisabled: disabled || isDisabled,
          })}
        >
          {leftElement && (
            <div
              className={cn(
                'group mr-2 peer-disabled:cursor-not-allowed flex justify-center items-center h-full',
                classNames?.leftElement,
              )}
            >
              {leftElement}
            </div>
          )}
          <input
            className={inputElStyles({
              size,
              variant,
              isMobile,
              className: classNames?.input,
            })}
            size={htmlSize}
            disabled={disabled || Boolean(isDisabled)}
            id={label}
            placeholder=" "
            value={onCommit ? inputValue : value}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              setInputValue(e.target.value);
            }}
            {...restProps}
            ref={forwardedRef}
          />
          <label
            htmlFor={label}
            className={labelStyles({
              size,
              isLeftElement: !!leftElement,
              isMobile,
              variant,
              hasValue: !!value && [value].length > 0,
              className: classNames?.label,
            })}
          >
            {label}
          </label>
          {rightElement && (
            <div
              className={cn(
                'ml-2 peer-disabled:cursor-not-allowed h-full flex justify-center items-center',
                classNames?.rightElement,
              )}
            >
              {rightElement}
            </div>
          )}
        </div>

        {isError && errorMessage && (
          <span
            title={errorMessage}
            className="text-xs peer-disabled:cursor-not-allowed text-orange whitespace-nowrap text-ellipsis overflow-hidden w-full mt-1"
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
