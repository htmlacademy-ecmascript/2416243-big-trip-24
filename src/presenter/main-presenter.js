import TripInfoView from '../view/trip-info-view.js';
import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import EventAddButtonView from '../view/event-add-button-view.js';
import EventsMessageView from '../view/events-message-view.js';
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presenter';
import { remove, render, RenderPosition } from '../framework/render.js';
import { FilterMessage, FilterType, SortType, UpdateType, UserAction } from '../constants.js';
import { sortByDate, sortByDuration, sortByValue } from '../util/utils.js';
import { filter } from '../util/filters.js';

export default class MainPresenter {
  #pointModel = null;
  #filterModel = null;

  #pointPresenters = new Map();
  #newPointPresenter = null;

  #tripInfoComponent = new TripInfoView();
  #addButtonComponent = null;

  #sortComponent = null;
  #messageComponent = null;
  #listComponent = new EventsListView();

  #defaultSortType = SortType.DAY;
  #currentSortType = this.#defaultSortType;
  #filterType = FilterType.EVERYTHING;

  constructor({ infoContainer, contentContainer, pointModel, filterModel }) {
    this.infoContainer = infoContainer;
    this.contentContainer = contentContainer;
    this.#pointModel = pointModel;
    this.#filterModel = filterModel;

    this.#newPointPresenter = new NewPointPresenter({
      listComponent: this.#listComponent.element,
      pointModel: this.#pointModel,
      onDataChange: this.#handleViewAction,
      onDestroy: this.#handleNewPointFormClose
    });

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    const points = this.#pointModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case 'day':
        return filteredPoints.sort(sortByDate('dateFrom'));
      case 'time':
        return filteredPoints.sort(sortByDuration('dateFrom', 'dateTo'));
      case 'price':
        return filteredPoints.sort(sortByValue('basePrice'));
    }

    return filteredPoints.sort(sortByDate('dateFrom'));
  }

  get offers() {
    return this.#pointModel.offers;
  }

  get destinations() {
    return this.#pointModel.destinations;
  }

  init() {
    this.#renderHeader();
    this.#renderContainer();
    this.#renderContent();
  }

  #renderHeader = () => {
    this.#addButtonComponent = new EventAddButtonView({ onClick: this.#handleNewPointButtonClick });
    render(this.#tripInfoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
    render(this.#addButtonComponent, this.infoContainer);
  };

  #renderContent = () => {
    this.#renderPoints();
    this.#renderMessage();
    this.#renderSortTypes();
  };

  #clearContent = () => {
    this.#clearPoints();
    remove(this.#sortComponent);

    if (this.#messageComponent) {
      remove(this.#messageComponent);
    }
  };

  #renderMessage = () => {
    if (this.points.length === 0) {
      const filterMessage = FilterMessage[this.#filterType];

      this.#messageComponent = new EventsMessageView(filterMessage);
      render(this.#messageComponent, this.contentContainer);
    }
  };

  #renderSortTypes = () => {
    const currentSortType = this.#currentSortType;
    const onSortTypeChange = this.#handleSortTypeChange;

    this.#sortComponent = new SortView({ currentSortType, onSortTypeChange });
    render(this.#sortComponent, this.contentContainer, RenderPosition.AFTERBEGIN);
  };


  #renderContainer = () => {
    render(this.#listComponent, this.contentContainer);
  };

  #renderPoints = () => {
    this.points.forEach((point) => this.#renderPoint(point, this.offers, this.destinations));
  };

  #clearPoints = () => {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
    this.#newPointPresenter.destroy();
  };

  #renderPoint = (point, offers, destinations) => {
    const listComponent = this.#listComponent.element;
    const onDataChange = this.#handleViewAction;
    const onModeChange = this.#handleModeChange;

    const pointPresenter = new PointPresenter({ listComponent, onDataChange, onModeChange });

    pointPresenter.init(point, offers, destinations);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #createNewPoint = () => {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init();

    if (this.#messageComponent) {
      remove(this.#messageComponent);
    }
  };

  #handleViewAction = (actionType, updateType, updatedPoint) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointModel.updatePoint(updateType, updatedPoint);
        break;
      case UserAction.ADD_POINT:
        this.#pointModel.addPoint(updateType, updatedPoint);
        break;
      case UserAction.DELETE_POINT:
        this.#pointModel.deletePoint(updateType, updatedPoint);
        break;
    }
  };

  #handleModelEvent = (updateType, updatedPoint) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(updatedPoint.id).init(updatedPoint, this.offers, this.destinations);
        break;
      case UpdateType.MINOR:
        this.#clearContent();
        this.#renderContent();
        break;
      case UpdateType.MAJOR:
        this.#currentSortType = this.#defaultSortType;
        this.#clearContent();
        this.#renderContent();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    this.#currentSortType = sortType;
    this.#clearPoints();
    this.#renderPoints();
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
    this.#newPointPresenter.destroy();
  };

  #handleNewPointFormClose = () => {
    this.#renderMessage();
    this.#addButtonComponent.element.disabled = false;
  };

  #handleNewPointButtonClick = () => {
    this.#createNewPoint();
    this.#addButtonComponent.element.disabled = true;
  };
}
