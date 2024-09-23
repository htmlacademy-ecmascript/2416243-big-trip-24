import AbstractView from '../framework/view/abstract-view.js';
import { getCapitalized } from '../utils.js';
import { FILTER_TYPES } from '../constants.js';

const createTripFilterTypeTemplate = (filter) => `
    <div class="trip-filters__filter">
      <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}" ${filter.checked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${filter.type}">${getCapitalized(filter.type)}</label>
    </div>`;

const createFiltersTemplate = () => `
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">
          ${FILTER_TYPES.map((filter) => createTripFilterTypeTemplate(filter)).join('')}

          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>`;

export default class FiltersView extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}
