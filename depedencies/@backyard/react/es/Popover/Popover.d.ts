import * as React from 'react';
import type { Modifier as PopperJSModifier, Options as PopperJSOptions } from '@popperjs/core/lib/types';
import 'core-js/es/array/find';
import 'core-js/es/promise';
import 'core-js/es/object/assign';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { PortalProps } from '../Portal';
/**
 * Backyard React Popover
 *
 * @todo Comments
 * @todo Additional Tests
 */
declare const Popover: BDSForwardRef<PopoverProps>;
declare type PopoverRef = HTMLElement;
interface PopoverProps extends BackyardBaseProps<PopoverRef> {
    /**
     * Anchor ref of the element to reference for the popover
     * Required if `children` is not defined
     */
    anchorEl?: HTMLElement;
    /**
     * Popover will use its children as reference by default
     * Required if `anchorRef` is not defined
     */
    children?: React.ReactElement<any, any>;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Portal Container
     */
    container?: PortalProps['container'];
    /**
     * Whether or not the tooltip is open by default
     */
    defaultOpen?: boolean;
    /**
     * Whether or not portal will be disabled
     */
    disablePortal?: PortalProps['disablePortal'];
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This prop won't impact the enter touch delay (`enterTouchDelay`).
     */
    openDelay?: number;
    /**
     * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
     */
    openNextDelay?: number;
    /**
     * Whether or not the invisible overlay renders
     */
    hideOverlay?: boolean;
    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide this prop. It falls back to a randomly generated id.
     */
    id?: string;
    /**
     * Whether or not the tooltip/portal will remain mounted when closed
     * This is useful for SSR/SEO situations where you want the Tooltip to remain on the page when closed
     */
    keepMounted?: boolean;
    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This prop won't impact the leave touch delay (`leaveTouchDelay`).
     */
    closeDelay?: number;
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {Event} event The event source of the callback.
     */
    onClose?: () => void;
    /**
     * Callback fired when the component requests to be open.
     *
     * @param {object} event The event source of the callback.
     */
    onOpen?: () => void;
    /**
     * Offset too apply to the popover
     * [0, 16]
     *   /|\
     * First element is the offset along the edge of the anchor, in pixels
     * Second element is the offset away from the anchor, in pixels
     */
    offset?: Array<number>;
    /**
     * If `true`, the tooltip is shown.
     */
    open?: boolean;
    /**
     * Position of the tooltip from the reference element (child)
     * Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `Popover` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *      [Pop]
     */
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    /**
     * PopperJS Modifiers to extend/override default modifiers in `Popover`
     */
    popperModifiers?: PopperJSModifier<string, object>[];
    /**
     * PopperJS Options to extends/override default options in `TooltipOptions`
     */
    popperOptions?: PopperJSOptions;
    /**
     * Tooltip to handle popper events
     */
    pop: React.ReactElement;
}
export { Popover };
export type { PopoverProps, PopoverRef };
export default Popover;
