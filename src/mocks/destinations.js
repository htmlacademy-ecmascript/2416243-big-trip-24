import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { CITIES, CITY_DESCRIPTIONS } from '../constants.js';

export const destinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01e73ab',
    description: `${getRandomArrayElement(CITY_DESCRIPTIONS)}`,
    name: `${getRandomArrayElement(CITIES)}`,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      }
    ]
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    description: `${getRandomArrayElement(CITY_DESCRIPTIONS)}`,
    name: `${getRandomArrayElement(CITIES)}`,
    pictures: []
  },
  {
    id: 'f4b62099-29rf-4cud-ate2-u457c4a2998r',
    description: `${getRandomArrayElement(CITY_DESCRIPTIONS)}`,
    name: `${getRandomArrayElement(CITIES)}`,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      }
    ]
  },
  {
    id: 'f4b6ob99-19ef-4y7d-ate2-47eec4a19pjr',
    description: `${getRandomArrayElement(CITY_DESCRIPTIONS)}`,
    name: `${getRandomArrayElement(CITIES)}`,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      }
    ]
  },
  {
    id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
    description: `${getRandomArrayElement(CITY_DESCRIPTIONS)}`,
    name: `${getRandomArrayElement(CITIES)}`,
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger()}`,
        description: 'Event photo.'
      }
    ]
  }
];
