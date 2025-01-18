import React from 'react';
import { cn } from '../../hooks';

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('py-3 border-outline-1 mr-6 h-max border-b', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';
