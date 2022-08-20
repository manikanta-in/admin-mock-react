import * as React from 'react';
const useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

const runKeyHandler = (e, keyHandlers) => {
  const handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
};

const useKeyDownHandler = (active, keyHandlers) => {
  const keyHandlersRef = React.useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  return React.useCallback(e => {
    if (active) {
      runKeyHandler(e, keyHandlersRef.current);
    }
  }, [active]);
};

const useGlobalKeyDown = (active, keyHandlers) => {
  const keyHandlersRef = React.useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers; // eslint-disable-next-line consistent-return

  useIsomorphicEffect(() => {
    if (active) {
      const handleKeyDown = event => {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
};

const keycode = {
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  Enter: 13,
  Home: 36,
  End: 35,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  Esc: 27
};
export { useIsomorphicEffect, runKeyHandler, useKeyDownHandler, useGlobalKeyDown, keycode };