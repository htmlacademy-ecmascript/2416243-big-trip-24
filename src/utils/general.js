export const getCapitalized = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export const sortByValue = (value) => (a, b) => b[value] - a[value];

