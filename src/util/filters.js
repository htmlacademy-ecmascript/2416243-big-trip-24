import { FilterType } from '../constants.js';
import { isDatePast, isDatePresent, isDateFuture } from './utils.js';

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isDateFuture(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isDatePresent(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isDatePast(point.dateTo))
};
