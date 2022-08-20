import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["open", "openKeys", "closeKeys", "delayClose", "delayOpen", "minDate", "maxDate", "date", "dates", "disableDates", "disableFuture", "disablePast", "render", "state", "shape", "onChange", "onOpen", "onClose", "onKeyDown", "onClear", "calendarProps", "popoverProps", "popperProps", "clearButtonProps"];
import * as React from 'react';
import { isIOS } from 'react-device-detect';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import DatePickerNative from '../DatePickerNative';
import ClickAwayListener from '../ClickAwayListener';
import Popover, { usePopover } from '../Popover';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import CalendarPicker from '../Pickers/CalendarPicker';
import useAdapter from '../Pickers/hooks/useAdapter';
import DatePickerWrapper from './styles/DatePickerWrapper';
/**
 * Backyard React Date Picker
 *
 * `DatePicker` is used for selecting dates from a calendar, either through
 * the native date picker for mobile devices, or through a custom calendar popover.
 *
 * The text input of the picker uses `type` === 'date' for supporting browser, while gracefully
 * defaulting to a `text` input type with masking to help the user enter the correct date.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Date Picker with all dates selectable, use the default:
 * ```
 *  <DatePicker />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select any date
 * > On Mobile displays, this component switches to an `input` with `type` === 'date' for native browsers
 *
 * For a date picker that only allows the user to select certain dates, use the `dates` prop:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
 *          { label: 'Today 9:15 AM', value: '2020-07-19' },
 *          { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          new Date(2020, 06, 18),
 *          new Date(2020, 06, 19),
 *          new Date(2020, 06, 20)
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a read-only `select` and a calendar popover to use to select only the dates provided
 * > `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
 * > On mobile displays, removes the popover and uses the native `select` to select the date
 *
 * For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      minDate="2020-07-10"
 *      maxDate="2020-07-27"
 *      disableDates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select and dates that are not disabled
 * > `disableDates`, `minDate`, and `maxDate` can take a list of `Date`s, date strings ('yyyy-MM-dd')
 * > On mobile displays, removes the popover and uses the native `date` input
 *  >> NOTE: mobile browsers do not utilize `disableDates`, but will utilize `minDate` and `maxDate`
 *
 * The props `date`, `minDate`, `maxDate`, and `disabledDates` all use the `ParsableDate` type
 * They can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *
 * The prop `dates` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Today, July 19, 2020',
 *      value: '2020-07-19' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Today, July 19, 2020',
 *      start: '2020-07-19' // Can be any `ParsableDate`
 *      end: '2020-07-20' // Can be any `ParsableDate`
 *  }
 */

const DatePicker = /*#__PURE__*/React.forwardRef(function DatePicker(_ref, ref) {
  let {
    open: openProp = false,
    openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
    closeKeys = ['Escape'],
    delayClose = 300,
    delayOpen = 10,
    minDate: minDateProp,
    maxDate: maxDateProp,
    date: dateProp,
    dates: datesProp,
    disableDates: disableDatesProp,
    disableFuture: disableFutureProp,
    disablePast: disablePastProp,
    render: renderProp,
    state: stateProp = 'default',
    shape: shapeProp,
    // = 'rounded',
    onChange,
    onOpen,
    onClose,
    onKeyDown,
    onClear,
    calendarProps,
    popoverProps = {},
    popperProps = {},
    clearButtonProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'DatePicker'
  });
  const {
    isDesktop
  } = theme;
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Calculate memoized props

  const context = React.useMemo(() => ({
    render: renderProp,
    open: openProp,
    date: dateProp,
    dates: datesProp,
    disableDates: disableDatesProp,
    disableFuture: disableFutureProp,
    disablePast: disablePastProp,
    minDate: minDateProp,
    maxDate: maxDateProp
  }), [renderProp, openProp, dateProp, datesProp, disableDatesProp, disableFutureProp, disablePastProp, minDateProp, maxDateProp]); // Holds date adapter

  const adapter = useAdapter(); // Parse date

  const parsedDate = adapter.parse(dateProp, 'yyyy-MM-dd'); // Holds the container ref for picker

  const containerRef = React.useRef(null); // Holds the native picker ref for the anchor point of the popover

  const pickerRef = useForwardedRef(ref); // Holds the calendar picker ref from the popover

  const calendarRef = React.useRef(null); // Holds the current picker element set by the native picker for the anchor

  const [pickerElement, setPickerElement] = React.useState(null); // Holds state of the current date

  const [date, setDate] = React.useState(parsedDate ? adapter.format(parsedDate, 'yyyy-MM-dd') : null); // Holds state of the current state of the native input (either 'error' or 'default')

  const [state, setState] = React.useState(stateProp); // Parse the `minDate` and `maxDate` props if given

  const minDate = context.minDate ? adapter.parse(context.minDate) : null;
  const maxDate = context.maxDate ? adapter.parse(context.maxDate) : null; // Use Popover hook for open/close state handling

  const {
    open,
    handleOpen,
    handleClose,
    handleKeyDown,
    closeAfterDelay
  } = usePopover({
    containerRef,
    referenceElement: pickerElement,
    delayClose,
    delayOpen,
    closeKeys,
    openKeys,
    open: openProp,
    onOpen,
    onClose,
    onKeyDown
  });
  /**
   * Handles the native component change interaction
   *
   * @param event - change event
   * @param info - info object from either `SelectPicker` or `TextPicker`
   */

  const handleNativeChange = (event, info) => {
    let {
      value
    } = info; // Parse value from text input, or handle select's date if invalid
    // eslint-disable-next-line no-shadow

    let date = adapter.parse(value, 'MM/dd/yyyy');

    if (!date) {
      date = adapter.parse(value, 'yyyy-MM-dd') || info.date;
    } // Check whether or not parsed date was valid


    const isValid = adapter.isValid(date);

    if (isValid) {
      // Reformat value from info into normalized date string
      value = adapter.format(date, 'yyyy-MM-dd');
    } // Set new date value


    setDate(value); // If `onChange` defined and is valid date,

    if (onChange && isValid) {
      // Trigger `onChange`
      onChange(event, _extends({}, info, {
        value
      }));
    }
  };
  /**
   * Handles the calendar change event interaction
   *
   * @param date - selected date from the `CalendarPicker`
   */
  // eslint-disable-next-line no-shadow


  const handleCalendarChange = date => {
    // Format normalized date string from date given
    const value = adapter.format(date, 'yyyy-MM-dd'); // Set new date value

    setDate(value); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(null, {
        from: 'CalendarPicker',
        value,
        date
      });
    } // Close picker after selection


    closeAfterDelay(); // IOS mobile devices render an overlay effect
    // when focused with the native select...
    // If not IOS device,

    if (!isIOS) {
      // Keep focus on picker
      pickerRef.current?.focus();
    }
  };
  /**
   * Handles the clear button click event interaction
   *
   * @param event - click even from clear button
   */


  const handleClear = event => {
    // Close picker after selection
    closeAfterDelay(); // If `onClear` prop defined,

    if (onClear) {
      // Trigger `onClear`
      onClear(event);
    }
  }; // Side effect to handle when `time` changes externally


  React.useEffect(() => {
    // eslint-disable-next-line no-shadow
    const parsedDate = adapter.parse(dateProp, 'yyyy-MM-dd');
    setDate(parsedDate ? adapter.format(parsedDate) : null);
  }, [dateProp]); // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes

  React.useEffect(() => setPickerElement(pickerRef.current?.parentElement || pickerRef.current), [isDesktop, pickerRef]); // Side effect for when the `state` prop is updated externally

  React.useEffect(() => setState(stateProp), [stateProp]); // Side effect to check whether or not a valid date was selected

  React.useEffect(() => {
    // If we are in the desktop view and the date is parsable,
    if (isDesktop && adapter.parse(date, 'yyyy-MM-dd') && calendarRef?.current) {
      // Check whether or not a disabled date was selected
      setTimeout(() => setState(calendarRef.current.querySelector('.selected.disabled') ? 'error' : 'default'), 50);
    } else {
      setState('default');
    }
  }, [date, calendarRef]); // Alters rendered type of component

  const renderType = // If render type is not native,
  context.render !== 'native' ? {
    // Calculate whether render is set to custom or if automated switch is triggered
    disableNative: context.render === 'custom' || isDesktop
  } : {
    // Don't disable native if native type is given
    disableNative: false
  };
  /**
   * Layout:
   *  <div> // click away listener listens for any click outside of this element
   *      <DatePickerNative />
   *      <Popover> // appears open only on desktop
   *          <CalendarPicker />
   *      </Popover>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(DatePickerWrapper, {
    className: "picker datepicker" + (dateProp ? " interaction--completed completed" : ""),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(DatePickerNative, _extends({
    key: "picker",
    withCustom: renderType.disableNative,
    dates: context.dates
  }, renderType, {
    className: open ? "focus" : "",
    selectWrapperProps: {
      className: open ? 'interaction--active' : ""
    },
    textWrapperProps: {
      className: open ? 'interactive--active' : ""
    },
    onClick: handleOpen,
    onChange: handleNativeChange,
    onKeyDown: handleKeyDown,
    state: state,
    date: date || '' // When value is null/falsy, just show an empty string
    ,
    min: minDate ? adapter.format(minDate, 'yyyy-MM-dd') : null,
    max: maxDate ? adapter.format(maxDate, 'yyyy-MM-dd') : null,
    shape: shape,
    onClear: handleClear,
    clearButtonProps: clearButtonProps,
    alwaysShowMask: open
  }, props, {
    // @todo
    ref: pickerRef
  })), renderType.disableNative && pickerElement ? /*#__PURE__*/React.createElement(Popover, _extends({
    disablePortal: true,
    keepMounted: true,
    open: open,
    anchorEl: pickerElement,
    offset: [0, 0],
    pop: /*#__PURE__*/React.createElement("div", {
      className: `datepicker-popover shape--${shape}`
    }, /*#__PURE__*/React.createElement(CalendarPicker, _extends({
      date: date,
      dates: context.dates,
      disableDates: context.disableDates,
      disableFuture: context.disableFuture,
      disablePast: context.disablePast,
      minDate: minDate,
      maxDate: maxDate,
      onChange: handleCalendarChange,
      disableKeyboardControl: !open,
      shape: shape
    }, calendarProps, {
      ref: calendarRef
    })))
  }, popoverProps, popperProps)) : null));
});
DatePicker.bdsName = 'DatePicker';
export { DatePicker };
export default DatePicker;