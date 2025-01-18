import React from 'react';
import { cn } from '../../hooks';

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'border-b border-outline-1 sticky top-0 z-10 bg-background-3',
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';
