import { render, RenderPosition } from '../render.js';
import TripInfo from '../view/trip-info';
import TripFiltersView from '../view/trip-filters-view';
import EventAddButtonView from '../view/event-add-button-view';
import TripSortView from '../view/trip-sort-view';
import TripEventsListView from '../view/trip-events-list-view';
import TripListItem from '../view/trip-event-list-item-view';
import TripEventsPointView from '../view/trip-events-point-view';
import EventAddAndEditFormView from '../view/event-add-and-edit-form-view';

export default class GlobalPresenter {

  constructor() {
    this.pageHeader = document.querySelector('.page-header');
    this.tripMain = this.pageHeader.querySelector('.trip-main');
    this.tripFilters = this.pageHeader.querySelector('.trip-controls__filters');

    this.pageMain = document.querySelector('.page-main');
    this.tripEvents = this.pageMain.querySelector('.trip-events');
  }

  renderTripInfo() {
    render(new TripInfo(), this.tripMain, RenderPosition.AFTERBEGIN);
  }

  renderTripFilters() {
    render(new TripFiltersView(), this.tripFilters, RenderPosition.BEFOREEND);
  }

  renderEventAddButton() {
    render(new EventAddButtonView(), this.tripMain, RenderPosition.BEFOREEND);
  }

  renderTripSort() {
    render(new TripSortView(), this.tripEvents, RenderPosition.BEFOREEND);
  }

  renderTripEventsList() {
    render(new TripEventsListView(), this.tripEvents, RenderPosition.BEFOREEND);
  }

  renderFormEdit() {
    this.tripEventsList = this.tripEvents.querySelector('.trip-events__list');

    const formEditPoint = new EventAddAndEditFormView();

    render(new TripListItem(formEditPoint.getTemplate()), this.tripEventsList, RenderPosition.BEFOREEND);
  }

  renderTripEventPoint() {
    this.tripEventsList = this.tripEvents.querySelector('.trip-events__list');

    const tripEventPoint = new TripEventsPointView();

    [1, 2, 3].forEach(() => render(new TripListItem(tripEventPoint.getTemplate()), this.tripEventsList, RenderPosition.BEFOREEND));

  }

  init() {
    this.renderTripInfo();
    this.renderTripFilters();
    this.renderEventAddButton();
    this.renderTripSort();
    this.renderTripEventsList();
    this.renderFormEdit();
    this.renderTripEventPoint();
  }
}
