import EventEditorView from '../view/event-editor-view.js';
import EventsItemView from '../view/events-item-view.js';
import { render, replace, remove } from '../framework/render.js';
import { Mode, UserAction, UpdateType } from '../constants.js';

export default class PointPresenter {
  #listComponent = null;
  #eventComponent = null;
  #eventEditorComponent = null;

  #point = [];
  #offers = [];
  #destinations = [];

  #handleDataChange = null;
  #handleModeChange = null;

  #mode = Mode.DEFAULT;

  constructor({ listComponent, onDataChange, onModeChange }) {
    this.#listComponent = listComponent;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevEventComponent = this.#eventComponent;
    const prevEventEditorComponent = this.#eventEditorComponent;

    this.#eventComponent = new EventsItemView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: this.#handleOpenClick,
      onFavoriteClick: this.#handleFavoriteClick
    });

    this.#eventEditorComponent = new EventEditorView({
      point: this.#point,
      offers: this.#offers,
      destinations: this.#destinations,
      onEditClick: this.#handleCloseClick,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick
    });

    if (prevEventComponent === null || prevEventEditorComponent === null) {
      render(this.#eventComponent, this.#listComponent);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventEditorComponent, prevEventEditorComponent);
    }

    remove(prevEventComponent);
    remove(prevEventEditorComponent);
  }

  destroy() {
    remove(this.#eventComponent);
    remove(this.#eventEditorComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#eventEditorComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm = () => {
    replace(this.#eventEditorComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#eventComponent, this.#eventEditorComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  };

  #escKeyDownHandler = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.#eventEditorComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  };

  #handleOpenClick = () => {
    this.#replacePointToForm();
  };

  #handleCloseClick = () => {
    this.#eventEditorComponent.reset(this.#point);
    this.#replaceFormToPoint();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      point);
    this.#replaceFormToPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.PATCH,
      {...this.#point, isFavorite: !this.#point.isFavorite}
    );
  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(
      UserAction.DELETE_POINT,
      UpdateType.MINOR,
      point
    );
    this.#replaceFormToPoint();
  };
}
