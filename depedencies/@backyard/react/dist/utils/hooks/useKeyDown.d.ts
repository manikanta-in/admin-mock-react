import * as React from 'react';
declare const useIsomorphicEffect: typeof React.useEffect;
declare type KeyHandlers = Record<number, () => void>;
declare const runKeyHandler: (e: KeyboardEvent | React.KeyboardEvent, keyHandlers: KeyHandlers) => void;
declare const useKeyDownHandler: (active: boolean, keyHandlers: KeyHandlers) => (e: React.KeyboardEvent) => void;
declare const useGlobalKeyDown: (active: boolean, keyHandlers: KeyHandlers) => void;
declare const keycode: {
    ArrowUp: number;
    ArrowDown: number;
    ArrowLeft: number;
    ArrowRight: number;
    Enter: number;
    Home: number;
    End: number;
    Space: number;
    PageUp: number;
    PageDown: number;
    Esc: number;
};
export { useIsomorphicEffect, runKeyHandler, useKeyDownHandler, useGlobalKeyDown, keycode };
