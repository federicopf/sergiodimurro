import { useState, useEffect, useCallback } from 'react';

export function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkDeviceType = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Controlla all'avvio
    checkDeviceType();

    // Debounce per il resize
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDeviceType, 100);
    };

    // Aggiungi listener per il resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkDeviceType]);

  return { 
    isMobile, 
    isDesktop: !isMobile, 
    isLoading 
  };
}
