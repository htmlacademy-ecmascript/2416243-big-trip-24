import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import minMax from 'dayjs/plugin/minMax';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { DateFormat, TIME_ZONE } from '../constants.js';

dayjs.extend(duration);
dayjs.extend(minMax);
dayjs.extend(utc);
dayjs.extend(timezone);

const Millisecond = {
  HOUR: 3600000,
  DAY: 86400000
};

export const convertDate = (date, format) => date
  ? dayjs(date).format(format)
  : '';

export const calculateDuration = (start, end) => dayjs.duration(dayjs(end).diff(dayjs(start)));

export const convertDuration = (start, end) => {
  const value = dayjs(end).diff(dayjs(start));
  const days = Math.floor(dayjs.duration(value).asDays());
  const hours = dayjs.duration(value).format(DateFormat.H_M_DURATION);

  switch (true) {
    case value < Millisecond.HOUR:
      return dayjs.duration(value).format(DateFormat.M_DURATION);
    case value >= Millisecond.HOUR && value < Millisecond.DAY:
      return dayjs.duration(value).format(DateFormat.H_M_DURATION);
    case value >= Millisecond.DAY:
      return days < 10 ? `0${days}D ${hours}` : `${days}D ${hours}`;
  }
};

export const isDateFuture = (start) => dayjs().isBefore(start);

export const isDatePresent = (start, end) => dayjs().isAfter(start) && dayjs().isBefore(end);

export const isDatePast = (end) => dayjs().isAfter(end);

export const sortByDate = (start) => (a, b) => dayjs(a[start]).diff(dayjs(b[start]));

export const sortByDuration = (start, end) => (a, b) => {
  const firstDuration = calculateDuration(a[start], a[end]);
  const secondDuration = calculateDuration(b[start], b[end]);

  return secondDuration.asMilliseconds() - firstDuration.asMilliseconds();
};

export const getMinDate = (dates) => convertDate(dayjs.min(dates.map((date) =>dayjs(date).tz(TIME_ZONE))), DateFormat.DAY_MONTH);

export const getMaxDate = (dates) => convertDate(dayjs.max(dates.map((date) =>dayjs(date).tz(TIME_ZONE))), DateFormat.DAY_MONTH);
