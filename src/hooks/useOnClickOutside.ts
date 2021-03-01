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



// another more complex solution from here: https://tobbelindstrom.com/blog/useClickOutside/

// import { useRef, useEffect, useCallback, RefObject } from 'react';

// export const getRefElement = <T>(
//   element?: RefObject<Element> | T
// ): Element | T | undefined | null => {
//   if (element && 'current' in element) {
//     return element.current;
//   }

//   return element;
// };


// export const isSSR: boolean = !(
//   typeof window !== 'undefined' && window.document?.createElement
// );

// interface UseEventListener {
//   type: keyof WindowEventMap;
//   listener: EventListener;
//   element?: RefObject<Element> | Document | Window | null;
//   options?: AddEventListenerOptions;
// }

// export const useEventListener = ({
//   type,
//   listener,
//   element = isSSR ? undefined : window,
//   options
// }: UseEventListener): void => {
//   const savedListener = useRef<EventListener>();

//   useEffect(() => {
//     savedListener.current = listener;
//   }, [listener]);

//   const handleEventListener = useCallback((event: Event) => {
//     savedListener.current?.(event);
//   }, []);

//   useEffect(() => {
//     const target = getRefElement(element);
//     target?.addEventListener(type, handleEventListener, options);
//     return () => target?.removeEventListener(type, handleEventListener);
//   }, [type, element, options, handleEventListener]);
// };


//  const useOnClickOutside = (
//   element: RefObject<Element> | null,
//   callback: (event: MouseEvent) => void
// ): void => {
//   const handleClick = useCallback(
//     (event) => {
//       if (!getRefElement(element)?.contains(event.target)) {
//         callback(event);
//       }
//     },
//     [callback, element]
//   );

//   useEventListener({
//     type: 'click',
//     listener: handleClick
//   });
// };

// export default useOnClickOutside