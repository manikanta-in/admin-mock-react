import * as React from 'react';
import useAdapter from './useAdapter';

const useNextMonthDisabled = (month, {
  disableFuture,
  maxDate
}) => {
  const adapter = useAdapter();
  return React.useMemo(() => {
    const now = adapter.date();
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    return !adapter.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, adapter]);
};

const usePreviousMonthDisabled = (month, {
  disablePast,
  minDate
}) => {
  const adapter = useAdapter();
  return React.useMemo(() => {
    const now = adapter.date();
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    return !adapter.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, adapter]);
};

export { useNextMonthDisabled, usePreviousMonthDisabled };