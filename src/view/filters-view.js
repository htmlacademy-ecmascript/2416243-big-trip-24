import AbstractView from '../framework/view/abstract-view.js';
import { getCapitalized } from '../utils/general.js';

const createTripFilterTypeTemplate = (filter, currentFilterType) => `
    <div class="trip-filters__filter">
      <input
        id="filter-${filter.type}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${filter.type}"
        ${filter.type === currentFilterType ? 'checked' : ''}
        ${filter.count === 0 ? 'disabled' : ''}>
      <label class="trip-filters__filter-label" for="filter-${filter.type}">${getCapitalized(filter.type)}</label>
    </div>`;

const createFiltersTemplate = (filters, currentFilterType) => `
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">
          ${filters.map((filter) => createTripFilterTypeTemplate(filter, currentFilterType)).join('')}

          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>`;

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({ filters, currentFilterType, onFilterTypeChange }) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (event) => {
    event.preventDefault();
    this.#handleFilterTypeChange(event.target.value);
  };
}
