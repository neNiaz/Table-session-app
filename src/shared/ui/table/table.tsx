import { cn } from '../../hooks';
import React from 'react';

export const Table = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn('w-full relative overflow-auto h-full', className)}
    ref={ref}
  >
    <table
      className={cn(
        'w-full caption-bottom text-sm border-separate border-spacing-0',
      )}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';
