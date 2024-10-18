import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../constants.js';
import { getCapitalized } from '../utils/general.js';

const createTripSortItemTemplate = (name, isDisabled, currentSortType) => `
    <div class="trip-sort__item  trip-sort__item--${name}">
      <input
        id="sort-${name}"
        class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${name}"
        data-sort-type="${name}"
        ${currentSortType.name === name ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}>
      <label
        class="trip-sort__btn"
        for="sort-${name}">${getCapitalized(name)}</label>
    </div>`;

const createSortTemplate = (currentSortType) => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${Object
    .values(SortType)
    .map((type) => createTripSortItemTemplate(type.name, type.disabled, currentSortType))
    .join('')}
    </form>`;

export default class SortView extends AbstractView {
  #currentSortType = null;
  #handleSortTypeChange = null;

  constructor({ currentSortType, onSortTypeChange }) {
    super();
    this.#currentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (event) => this.#handleSortTypeChange(event.target.dataset.sortType);
}
