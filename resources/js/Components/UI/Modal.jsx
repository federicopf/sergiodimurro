import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';

const Modal = React.forwardRef(({
  isOpen,
  onClose,
  children,
  size = 'md',
  className = '',
  ...props
}, ref) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            'relative w-full transform rounded-lg bg-white shadow-xl transition-all',
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>
  );
});

const ModalHeader = React.forwardRef(({
  children,
  onClose,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-between p-6 border-b border-gray-200', className)}
      {...props}
    >
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
});

const ModalBody = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
});

const ModalFooter = React.forwardRef(({
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50', className)}
      {...props}
    >
      {children}
    </div>
  );
});

Modal.displayName = 'Modal';
ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalFooter.displayName = 'ModalFooter';

export { Modal, ModalHeader, ModalBody, ModalFooter };
