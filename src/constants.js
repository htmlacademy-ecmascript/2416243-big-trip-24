export const CITIES = [
  'Paris',
  'London',
  'Chicago',
  'Tokio',
  'New York',
  'Moscow',
  'Amsterdam',
  'San-Francisco'
];

export const CITY_DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.'
];

export const PRICE = {
  MIN: 10,
  MAX: 1000
};

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

export const DEFAULT_EVENT_TYPE = 'train';

export const FilterType = {
  EVERYTHING: 'everything',
  PAST: 'past',
  PRESENT: 'present',
  FUTURE: 'future'
};

export const TRIP_SORT_ITEMS = [
  {
    key: 'day',
    checked: true,
    disabled: false,
  },
  {
    key: 'event',
    checked: false,
    disabled: true,
  },
  {
    key: 'time',
    checked: false,
    disabled: false,
  },
  {
    key: 'price',
    checked: false,
    disabled: false,
  },
  {
    key: 'offer',
    checked: false,
    disabled: true,
  },
];

export const DATE_TIME_FORMAT = {
  SHORT_DATE: 'MMM D',
  DATE_AND_TIME: 'DD/MM/YY HH:mm',
  TIME: 'HH:mm',
  D_H_M_DURATION: 'DD[D] HH[H] mm[M]',
  H_M_DURATION: 'HH[H] mm[M]',
  M_DURATION: 'mm[M]'
};

export const EVENTS_MESSAGE = {
  EMPTY: 'Click New Event to create your first point',
  LOADING: 'Loading...'
};

export const FilterMessage = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now'
};

export const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
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
