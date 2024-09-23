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

export const FILTER_TYPES = [
  {
    type: 'everything',
    checked: true,
  },
  {
    type: 'future',
    checked: false,
  },
  {
    type: 'present',
    checked: false,
  },
  {
    type: 'past',
    checked: false,
  },
];

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