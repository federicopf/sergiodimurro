import React from 'react';
import { cn } from '../../utils/cn';

const Card = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

const CardHeader = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-b border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
});

const CardBody = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('px-6 py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
});

const CardFooter = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-t border-gray-200 bg-gray-50', className)}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardBody, CardFooter };
