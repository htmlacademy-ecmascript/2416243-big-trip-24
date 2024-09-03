import { createElement } from '../render';

function createTripListItemTemplate(data) {
  return `
    <li class="trip-events__item">${data}</li>
  `;
}

export default class TripListItem {
  constructor(data) {
    this.data = data;
  }

  getTemplate() {
    return createTripListItemTemplate(this.data);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
