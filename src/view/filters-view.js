import AbstractView from '../framework/view/abstract-view.js';
import { getCapitalized } from '../util/utils.js';

const createTripFilterTypeTemplate = (filter, isChecked) => `
    <div class="trip-filters__filter">
      <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}" ${isChecked ? 'checked' : ''} ${filter.count === 0 ? 'disabled' : ''}>
      <label class="trip-filters__filter-label" for="filter-${filter.type}">${getCapitalized(filter.type)}</label>
    </div>`;

const createFiltersTemplate = (filters) => `
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">
          ${filters.map((filter, index) => createTripFilterTypeTemplate(filter, index === 0)).join('')}

          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>`;

export default class FiltersView extends AbstractView {
  #filters = [];

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
