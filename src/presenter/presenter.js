import { render, RenderPosition, replace } from '../framework/render.js';
import TripInfoView from '../view/trip-info-view.js';
import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventEditorView from '../view/event-editor-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import EventAddButtonView from '../view/event-add-button-view.js';

export default class Presenter {
  #tripInfoComponent = new TripInfoView();
  #filtersComponent = new FiltersView();
  #addButtonComponent = new EventAddButtonView();
  #sortComponent = new SortView();
  #listComponent = new EventsListView();
  #pointModel = null;

  constructor({infoContainer, contentContainer, filtersContainer, pointModel}) {
    this.infoContainer = infoContainer;
    this.contentContainer = contentContainer;
    this.filtersContainer = filtersContainer;
    this.#pointModel = pointModel;
  }

  init() {
    const points = this.#pointModel.points;
    const destinations = this.#pointModel.destinations;
    const offers = this.#pointModel.offers;

    render(this.#tripInfoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
    render(this.#filtersComponent, this.filtersContainer);
    render(this.#addButtonComponent, this.infoContainer);
    render(this.#sortComponent, this.contentContainer);
    render(this.#listComponent, this.contentContainer);

    points.forEach((point) => this.#renderPoint(point, destinations, offers));
  }

  #renderPoint(point, destinations, offers) {
    const escKeyDownHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new EventsItemView({
      point,
      destinations,
      offers,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditorComponent = new EventEditorView({
      point,
      destinations,
      offers,
      onEditClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(pointEditorComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditorComponent);
    }

    render(pointComponent, this.#listComponent.element);
  }
}
