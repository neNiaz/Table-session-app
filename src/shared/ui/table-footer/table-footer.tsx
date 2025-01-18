import React from 'react';
import { cn } from '../../hooks';

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-b border-outline-1 sticky bottom-0 z-10 bg-background-3',
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';
