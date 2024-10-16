import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import EventAddButtonView from '../view/event-add-button-view.js';
import EventsMessageView from '../view/events-message-view.js';
import PointPresenter from './point-presenter.js';
import NewPointPresenter from './new-point-presenter.js';

import { remove, render, RenderPosition } from '../framework/render.js';
import { MESSAGE, FilterMessage, FilterType, SortType, UpdateType, UserAction, TimeLimit } from '../constants.js';
import { sortByDate, sortByDuration, sortByValue } from '../utils/general.js';
import { filter } from '../utils/filters.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';

export default class MainPresenter {
  #infoContainer = null;
  #contentContainer = null;
  #pointModel = null;
  #filterModel = null;

  #pointPresenters = new Map();
  #newPointPresenter = null;

  #addButtonComponent = null;
  #sortComponent = null;
  #messageComponent = null;
  #listComponent = new EventsListView();

  #defaultSortType = SortType.DAY;
  #currentSortType = this.#defaultSortType;
  #filterType = FilterType.EVERYTHING;

  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({ infoContainer, contentContainer, pointModel, filterModel }) {
    this.#infoContainer = infoContainer;
    this.#contentContainer = contentContainer;
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
      case SortType.DAY.name:
        return filteredPoints.sort(sortByDate('dateFrom'));
      case SortType.TIME.name:
        return filteredPoints.sort(sortByDuration('dateFrom', 'dateTo'));
      case SortType.PRICE.name:
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

  get loading() {
    return this.#pointModel.loading;
  }

  get error() {
    return this.#pointModel.error;
  }

  init() {
    this.#renderAddButton();
    this.#renderPointsContainer();
    this.#renderContent();
  }

  #renderAddButton = () => {
    this.#addButtonComponent = new EventAddButtonView({ onClick: this.#handleNewPointButtonClick });
    render(this.#addButtonComponent, this.#infoContainer);
  };

  #renderContent = () => {
    this.#renderPoints();
    this.#setInterfaceState();

    if (this.points.length > 0) {
      this.#renderSortTypes();
    }
  };

  #clearContent = () => {
    remove(this.#sortComponent);
    this.#clearPoints();

    if (this.#messageComponent) {
      remove(this.#messageComponent);
    }
  };

  #renderPointsContainer = () => {
    render(this.#listComponent, this.#contentContainer);
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

  #renderSortTypes = () => {
    const currentSortType = this.#currentSortType;
    const onSortTypeChange = this.#handleSortTypeChange;

    this.#sortComponent = new SortView({ currentSortType, onSortTypeChange });
    render(this.#sortComponent, this.#contentContainer, RenderPosition.AFTERBEGIN);
  };

  #setInterfaceState = () => {
    if (this.loading) {
      this.#messageComponent = new EventsMessageView(MESSAGE.LOADING);
      render(this.#messageComponent, this.#contentContainer);
      this.#disableAddButton();
      return;
    } else {
      remove(this.#messageComponent);
      this.#unableAddButton();
    }

    if (this.error) {
      this.#messageComponent = new EventsMessageView(MESSAGE.FAILED_LOAD);
      render(this.#messageComponent, this.#contentContainer);
      this.#disableAddButton();
      return;
    }

    if (this.points.length === 0) {
      const filterMessage = FilterMessage[this.#filterType];

      this.#messageComponent = new EventsMessageView(filterMessage);
      render(this.#messageComponent, this.#contentContainer);
    }
  };

  #unableAddButton = () => {
    this.#addButtonComponent.element.disabled = false;
  };

  #disableAddButton = () => {
    this.#addButtonComponent.element.disabled = true;
  };

  #handleViewAction = async (actionType, updateType, point) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(point.id).setSaving();
        try {
          await this.#pointModel.updatePoint(updateType, point);
        } catch (err) {
          this.#pointPresenters.get(point.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointModel.addPoint(updateType, point);
        } catch (err) {
          this.#pointPresenters.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(point.id).setDeleting();
        try {
          await this.#pointModel.deletePoint(updateType, point);
        } catch (err) {
          this.#pointPresenters.get(point.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, point) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(point.id).init(point, this.offers, this.destinations);
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
      case UpdateType.INIT:
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
    this.#setInterfaceState();
    this.#unableAddButton();
  };

  #handleNewPointButtonClick = () => {
    this.#createNewPoint();
    this.#disableAddButton();
  };
}
