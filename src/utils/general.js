import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import minMax from 'dayjs/plugin/minMax';
import { DateFormat } from '../constants.js';

export const getRandomInteger = (min = 1, max = 100) => Math.round(Math.random() * Math.abs(max - min)) + min;

dayjs.extend(duration);
dayjs.extend(minMax);

export const convertDate = (date, format) => date ? dayjs(date).format(format) : '';

export const calculateDuration = (start, end) => dayjs.duration(dayjs(end).diff(dayjs(start)));

export const convertDuration = (value) => {
  if (value.get('day')) {
    return value.format(DateFormat.D_H_M_DURATION);
  }

  if (!value.get('day') && value.get('hour')) {
    return value.format(DateFormat.H_M_DURATION);
  }

  return value.format(DateFormat.M_DURATION);
};

export const isDateFuture = (start) => dayjs().isBefore(start);

export const isDatePresent = (start, end) => dayjs().isAfter(start) && dayjs().isBefore(end);

export const isDatePast = (end) => dayjs().isAfter(end);

export const getCapitalized = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export const sortByDate = (start) => (a, b) => dayjs(a[start]).diff(dayjs(b[start]));

export const sortByDuration = (start, end) => (a, b) => {
  const firstDuration = calculateDuration(a[start], a[end]);
  const secondDuration = calculateDuration(b[start], b[end]);

  return secondDuration.asMilliseconds() - firstDuration.asMilliseconds();
};

export const sortByValue = (value) => (a, b) => b[value] - a[value];

export const getMinDate = (dates) => convertDate(dayjs.min(dates.map((date) =>dayjs(date))), DateFormat.DAY_MONTH);

export const getMaxDate = (dates) => convertDate(dayjs.max(dates.map((date) =>dayjs(date))), DateFormat.DAY_MONTH);
