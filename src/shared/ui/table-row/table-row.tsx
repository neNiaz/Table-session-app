import React from 'react';
import { cn } from '../../hooks';

interface TRProps extends React.HTMLAttributes<HTMLTableRowElement> {
  isHeader?: boolean;
  rowIndex?: number;
  classNames?: {
    firstTh?: string;
    lastTh?: string;
    root?: string;
  };
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TRProps>(
  (
    { className, classNames, children, isHeader = false, rowIndex, ...props },
    ref,
  ) => {
    const isEven = rowIndex !== undefined && rowIndex % 2 === 1;
    return (
      <tr
        ref={ref}
        key={rowIndex}
        className={cn(
          `transition-colors bg-white data-[state=selected]:bg-background-2 relative`,
          isHeader && 'bg-background-3',
          (isEven || isHeader) && 'bg-gray-100',
          className,
          classNames?.root,
        )}
        {...props}
      >
        {isHeader ? (
          <>
            <th
              className={cn('w-[1%] border-outline-1', classNames?.firstTh)}
            />
            {children}
            <th className={cn('w-[1%] border-outline-1', classNames?.lastTh)} />
          </>
        ) : (
          <>
            <td className={cn('w-[1%]', classNames?.firstTh)} />
            {children}
            <td className={cn('w-[1%]', classNames?.lastTh)} />
          </>
        )}
      </tr>
    );
  },
);
TableRow.displayName = 'TableRow';
