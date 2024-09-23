import { createElement } from '../render.js';
import { TRIP_SORT_ITEMS } from '../constants.js';

const createTripSortItemTemplate = (item) => `
    <div class="trip-sort__item  trip-sort__item--${item.key}">
      <input id="sort-${item.key}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item.key}" ${item.checked ? 'checked' : ''} ${item.disabled ? 'disabled' : ''}>
      <label class="trip-sort__btn" for="sort-${item.key}">${item.key}</label>
    </div>`;

const createSortTemplate = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${TRIP_SORT_ITEMS.map((item) => createTripSortItemTemplate(item)).join('')}
    </form>`;

export default class SortView {
  getTemplate() {
    return createSortTemplate();
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
