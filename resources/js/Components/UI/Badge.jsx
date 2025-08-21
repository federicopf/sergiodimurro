import React from 'react';
import { cn } from '../../utils/cn';

const badgeVariants = {
  default: 'bg-gray-100 text-gray-800 border-gray-200',
  primary: 'bg-blue-100 text-blue-800 border-blue-200',
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  danger: 'bg-red-100 text-red-800 border-red-200',
  info: 'bg-sky-100 text-sky-800 border-sky-200'
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-sm'
};

const Badge = React.forwardRef(({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
