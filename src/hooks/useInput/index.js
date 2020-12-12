import { useRef, useCallback, useEffect } from 'react';

const useInput = () => {
  const inputRef = useRef();
  const timer = useRef();

  const focus = useCallback(() => {
    inputRef?.current?.focus();
  }, []);

  const delayFocus = useCallback((miliseconds) => {
    timer.current = setTimeout(() => {
      inputRef?.current?.focus();
    }, miliseconds);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return {
    inputRef,
    focus,
    delayFocus,
    ref: (inputReference) => (inputRef.current = inputReference),
  };
};

export default useInput;
