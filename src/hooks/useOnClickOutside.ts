import { useEffect,  RefObject } from 'react';

const useOnClickOutside = (ref: RefObject<Element> | null, callback: (e: MouseEvent | React.TouchEvent) => void): void => {
  useEffect(() => {
    const target = ref?.current;
    const eventHandler = (e: any) => {
      if (!target || target.contains(e.target)) return;
      callback(e);
    };

    document.addEventListener('click', eventHandler);

    return () => document.removeEventListener('click', eventHandler);
  }, [ref]);
};

export default useOnClickOutside;