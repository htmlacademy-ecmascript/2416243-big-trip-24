import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { DATE_TIME_FORMAT, DEFAULT_EVENT_TYPE } from './constants.js';

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

export const getCapitalized = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const getDefaultPoint = () => ({
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: 0,
  isFavorite: false,
  offers: [],
  type: DEFAULT_EVENT_TYPE
});
