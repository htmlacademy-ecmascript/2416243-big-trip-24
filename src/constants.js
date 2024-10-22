export const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

export const DEFAULT_EVENT_TYPE = 'flight';

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

export const DateFormat = {
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM D',
  DATE_AND_TIME: 'DD/MM/YY HH:mm',
  TIME: 'HH:mm',
  D_H_M_DURATION: 'DD[D] HH[H] mm[M]',
  H_M_DURATION: 'HH[H] mm[M]',
  M_DURATION: 'mm[M]',
  DATE_PICKED: 'd/m/y H:i'
};

export const TIME_ZONE = 'Europe/Moscow';

export const generalFlatpickrConfig = {
  disableMobile: 'true',
  enableTime: true,
  'time_24hr': true,
  dateFormat: DateFormat.DATE_PICKED
};

export const MESSAGE = {
  LOADING: 'Loading...',
  FAILED_LOAD: 'Failed to load latest route information'
};

export const FilterMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now'
};

export const Mode = {
  DEFAULT: 'default',
  EDITING: 'editing',
};

export const SortType = {
  DAY: {
    name: 'day',
    disabled: false
  },
  EVENT: {
    name: 'event',
    disabled: true
  },
  TIME: {
    name: 'time',
    disabled: false
  },
  PRICE: {
    name: 'price',
    disabled: false
  },
  OFFERS: {
    name: 'offers',
    disabled: true
  }
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

export const DEFAULT_POINT = {
  id: 0,
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: 0,
  isFavorite: false,
  offers: [],
  type: DEFAULT_EVENT_TYPE
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE POINT',
  ADD_POINT: 'ADD POINT',
  DELETE_POINT: 'DELETE POINT'
};

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

export const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

export const AUTHORIZATION = 'Basic FE49wwUYuvTvhn9vBjwv47';

export const LIMIT_DISPLAYED_DESTINATIONS = 3;

export const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000
};

