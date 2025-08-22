import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils';

/**
 * ExampleComponent - Componente di esempio per mostrare le best practices
 * 
 * Questo componente dimostra:
 * - Documentazione JSDoc completa
 * - Props con default values
 * - Gestione delle varianti
 * - Utilizzo della utility cn
 * - ForwardRef per accessibilità
 * - DisplayName per debugging
 * 
 * @example
 * ```jsx
 * <ExampleComponent 
 *   variant="primary" 
 *   size="lg" 
 *   onClick={() => console.log('clicked')}
 * >
 *   Contenuto del componente
 * </ExampleComponent>
 * ```
 */
const ExampleComponent = React.forwardRef(({
  // Props principali
  children,
  variant = 'default',
  size = 'md',
  
  // Props di stile
  className = '',
  fullWidth = false,
  
  // Props di comportamento
  disabled = false,
  loading = false,
  
  // Props di accessibilità
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  
  // Props di eventi
  onClick,
  onMouseEnter,
  onMouseLeave,
  
  // Props aggiuntivi
  ...props
}, ref) => {
  // Definizione delle varianti
  const variants = {
    default: 'bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200',
    primary: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700',
    success: 'bg-green-600 text-white border-green-600 hover:bg-green-700',
    warning: 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-700',
    danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700',
  };

  // Definizione delle dimensioni
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  // Gestione dello stato disabled
  const isDisabled = disabled || loading;

  // Gestione del click
  const handleClick = (event) => {
    if (isDisabled || !onClick) return;
    onClick(event);
  };

  // Gestione del mouse enter/leave
  const handleMouseEnter = (event) => {
    if (isDisabled || !onMouseEnter) return;
    onMouseEnter(event);
  };

  const handleMouseLeave = (event) => {
    if (isDisabled || !onMouseLeave) return;
    onMouseLeave(event);
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-disabled={isDisabled}
      className={cn(
        // Classi base
        'inline-flex items-center justify-center font-medium rounded-lg border transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        
        // Varianti
        variants[variant],
        
        // Dimensioni
        sizes[size],
        
        // Larghezza
        fullWidth && 'w-full',
        
        // Stati
        isDisabled && 'opacity-50 cursor-not-allowed',
        !isDisabled && 'cursor-pointer',
        
        // Hover e focus (solo se non disabled)
        !isDisabled && 'hover:shadow-md active:scale-95',
        
        // Classe personalizzata
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleClick(event);
        }
      }}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4" 
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
          />
        </svg>
      )}
      
      {/* Contenuto */}
      {children}
    </div>
  );
});

// DisplayName per debugging
ExampleComponent.displayName = 'ExampleComponent';

// PropTypes per validazione (opzionale, ma raccomandato)
ExampleComponent.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  'aria-label': PropTypes.string,
  'aria-describedby': PropTypes.string,
};

// Default props
ExampleComponent.defaultProps = {
  variant: 'default',
  size: 'md',
  className: '',
  fullWidth: false,
  disabled: false,
  loading: false,
};

export default ExampleComponent;
