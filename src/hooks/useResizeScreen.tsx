import { useEffect, useState } from 'react';

const useResizeScreen = () => {
  const [isResizedScreen, setIsResizedScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsResizedScreen(!isMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isResizedScreen,
    setIsResizedScreen,
  };
};

export default useResizeScreen;
