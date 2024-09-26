import TripInfoView from '../view/trip-info-view.js';
import EventsListView from '../view/events-list-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import EventAddButtonView from '../view/event-add-button-view.js';
import EventsMessageView from '../view/events-message-view.js';
import PointPresenter from './point-presenter.js';
import { render, RenderPosition } from '../framework/render.js';
import { EVENTS_MESSAGE } from '../constants.js';
import { generateFilter } from '../mocks/filters.js';
import { updateItem } from '../util/utils.js';

export default class MainPresenter {
  #tripInfoComponent = new TripInfoView();
  #addButtonComponent = new EventAddButtonView();
  #sortComponent = new SortView();
  #listComponent = new EventsListView();
  #pointModel = null;
  #pointPresenters = new Map();

  #points = [];
  #offers = [];
  #destinations = [];

  constructor({infoContainer, contentContainer, filtersContainer, pointModel}) {
    this.infoContainer = infoContainer;
    this.contentContainer = contentContainer;
    this.filtersContainer = filtersContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = this.#pointModel.points;
    this.#destinations = this.#pointModel.destinations;
    this.#offers = this.#pointModel.offers;
    const filters = generateFilter(this.#points);

    render(this.#tripInfoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
    render(new FiltersView({filters}), this.filtersContainer);
    render(this.#addButtonComponent, this.infoContainer);

    this.#renderWithoutContent(this.#points);
    this.#renderContent(this.#points, this.#offers, this.#destinations);
  }

  #renderWithoutContent = (points) => {
    if (points.length === 0) {
      render(new EventsMessageView(EVENTS_MESSAGE.EMPTY), this.contentContainer);
    }
  };

  #renderContent = (points, offers, destinations) => {
    render(this.#sortComponent, this.contentContainer);
    render(this.#listComponent, this.contentContainer);
    this.#renderPoints(points, offers, destinations);
  };

  #renderPoints = (points, offers, destinations) => {
    points.forEach((point) => this.#renderPoint(point, offers, destinations));
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
