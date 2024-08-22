import { useEffect, useRef, useState } from "react";

const useEventListener = (eventType, callback, element = window) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};
export const useMediaQuery = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);
  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);
  return isMatch;
};

export const useDesktop = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop;
};
