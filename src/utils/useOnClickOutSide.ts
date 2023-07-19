import axios, { CancelToken } from 'axios';
import { useEffect } from 'react';

const handleUseOnClickOutside = (ref: any, handler: (arg0: any) => void) => {
  useEffect(() => {
    const listener = (event: { target: any }) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const hasIgnoredClass = (element: any, ignoredClass: string) =>
  (element.correspondingElement ? element.correspondingElement : element).classList.contains(
    ignoredClass,
  );

const isInIgnoredElement = (element: any, ignoredClass: string) => {
  do {
    if (hasIgnoredClass(element, ignoredClass)) {
      return true;
    }
  } while ((element = element.parentElement));

  return false;
};

export const useOnClickOutside = (
  ref: any,
  handler: (arg0: any) => void,
  ignoredClass = 'ignore-onClickOutside',
) =>
  handleUseOnClickOutside(ref, (event) => {
    if (isInIgnoredElement(event.target, ignoredClass)) {
      return;
    }

    handler(event);
  });
