import { useEffect, useState } from 'react';

interface WindowDimensions {
  width?: number;
  height?: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleWindowSize);

    handleWindowSize();

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
