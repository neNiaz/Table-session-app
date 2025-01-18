import React from 'react';
import { cn } from '../../hooks';

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn('h-12 text-left text-primary font-semibold', className)}
    {...props}
  />
));
TableHead.displayName = 'TableHead';
