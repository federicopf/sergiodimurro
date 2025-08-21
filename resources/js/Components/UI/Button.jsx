import React from 'react';
import { cn } from '../../utils/cn';

const buttonVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 border-gray-300',
  success: 'bg-green-600 hover:bg-green-700 text-white border-green-600',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
  outline: 'bg-transparent hover:bg-gray-100 text-gray-700 border-gray-300',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border-transparent'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg'
};

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
