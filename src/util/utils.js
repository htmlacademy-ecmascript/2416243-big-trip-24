import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { DATE_TIME_FORMAT } from '../constants.js';

export const getRandomInteger = (min = 1, max = 100) => Math.round(Math.random() * Math.abs(max - min)) + min;

export const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

dayjs.extend(duration);

export const convertDate = (date, format) => date ? dayjs(date).format(format) : '';

export const calculateDuration = (start, end) => dayjs.duration(dayjs(end).diff(dayjs(start)));

export const convertDuration = (value) => {
  if (value.get('day')) {
    return value.format(DATE_TIME_FORMAT.D_H_M_DURATION);
  }

  if (!value.get('day') && value.get('hour')) {
    return value.format(DATE_TIME_FORMAT.H_M_DURATION);
  }

  return value.format(DATE_TIME_FORMAT.M_DURATION);
};

export const isDateFuture = (start) => dayjs().isBefore(start);

export const isDatePresent = (start, end) => dayjs().isAfter(start) && dayjs().isBefore(end);

export const isDatePast = (end) => dayjs().isAfter(end);

export const getCapitalized = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);
