import TripInfoView from '../view/trip-info-view.js';
import EventsListView from '../view/events-list-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import EventAddButtonView from '../view/event-add-button-view.js';
import EventsMessageView from '../view/events-message-view.js';
import PointPresenter from './point-presenter.js';
import { render, RenderPosition } from '../framework/render.js';
import {EVENTS_MESSAGE, SortType} from '../constants.js';
import { generateFilter } from '../mocks/filters.js';
import { sortByDate, sortByDuration, sortByValue, updateItem } from '../util/utils.js';

export default class MainPresenter {
  #tripInfoComponent = new TripInfoView();
  #addButtonComponent = new EventAddButtonView();
  #listComponent = new EventsListView();
  #sortComponent = null;
  #pointModel = null;
  #pointPresenters = new Map();

  #points = [];
  #offers = [];
  #destinations = [];

  #defaultSortType = SortType.DAY;
  #currentSortType = this.#defaultSortType;

  constructor({infoContainer, contentContainer, filtersContainer, pointModel}) {
    this.infoContainer = infoContainer;
    this.contentContainer = contentContainer;
    this.filtersContainer = filtersContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#destinations = [...this.#pointModel.destinations];
    this.#offers = [...this.#pointModel.offers];
    const filters = generateFilter(this.#points);

    render(this.#tripInfoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
    render(new FiltersView({filters}), this.filtersContainer);
    render(this.#addButtonComponent, this.infoContainer);

    this.#renderWithoutContent();
    this.#renderContent();
  }

  #renderWithoutContent = () => {
    if (this.#points.length === 0) {
      render(new EventsMessageView(EVENTS_MESSAGE.EMPTY), this.contentContainer);
    }
  };

  #renderContent = () => {
    this.#renderSortTypes();
    this.#renderContainer();
    this.#sortPoints(this.#defaultSortType);
    this.#renderPoints();
  };

  #renderSortTypes = () => {
    const currentSortType = this.#currentSortType;
    const onSortTypeChange = this.#handleSortTypeChange;

    this.#sortComponent = new SortView({ currentSortType, onSortTypeChange });

    render(this.#sortComponent, this.contentContainer);
  };

  #handleSortTypeChange = (sortType) => {
    this.#clearPoints();
    this.#sortPoints(sortType);
    this.#renderPoints();
  };

  #sortPoints = (sortType) => {
    switch (sortType) {
      case 'day':
        this.#points.sort(sortByDate('dateFrom'));
        break;
      case 'time':
        this.#points.sort(sortByDuration('dateFrom', 'dateTo'));
        break;
      case 'price':
        this.#points.sort(sortByValue('basePrice'));
        break;
      default: this.#points.sort(sortByDate('dateFrom'));
    }

    this.#currentSortType = sortType;
  };

  #clearPoints = () => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  };

  #renderContainer = () => {
    render(this.#listComponent, this.contentContainer);
  };

  #renderPoints = () => {
    this.#points.forEach((point) => this.#renderPoint(point, this.#offers, this.#destinations));
  };

  #renderPoint = (point, offers, destinations) => {
    const listComponent = this.#listComponent.element;
    const onDataChange = this.#handlePointChange;
    const onModeChange = this.#handleModeChange;
    const pointPresenter = new PointPresenter({ listComponent, onDataChange, onModeChange });

    pointPresenter.init(point, offers, destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.#offers, this.#destinations);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}
