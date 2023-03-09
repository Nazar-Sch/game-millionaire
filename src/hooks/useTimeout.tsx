import React, { useEffect, useRef } from 'react';

const useTimeout = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);
  }, []);

  const setTimer = (timeout: number, callback: () => void) => {
    timerRef.current = setTimeout(() => {
      callback();
    }, timeout);
  };

  return { setTimer };
};

export default useTimeout;
