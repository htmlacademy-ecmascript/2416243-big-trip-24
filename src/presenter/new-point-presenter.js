import EventEditorView from '../view/event-editor-view.js';
import { remove, render, RenderPosition } from '../framework/render.js';
import { DEFAULT_POINT, UpdateType, UserAction } from '../constants.js';

export default class NewPointPresenter {
  #listComponent = null;
  #eventEditorComponent = null;

  #handleDataChange = null;
  #handleDestroy = null;

  #pointModel = null;
  #point = [];

  constructor({ listComponent, pointModel, onDataChange, onDestroy }) {
    this.#listComponent = listComponent;
    this.#pointModel = pointModel;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#point = DEFAULT_POINT;
  }

  init() {
    if (this.#eventEditorComponent !== null) {
      return;
    }

    this.#eventEditorComponent = new EventEditorView({
      point: this.#point,
      offers: this.#pointModel.offers,
      destinations: this.#pointModel.destinations,
      onEditClick: this.#handleCloseClick,
      onFormSubmit: this.#handleFormSubmit,
      onFormReset: this.#handleFormReset
    });

    render(this.#eventEditorComponent, this.#listComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#eventEditorComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#eventEditorComponent);
    this.#eventEditorComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#eventEditorComponent.updateElement({
      isDisabled: true,
      isSaving: true
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#eventEditorComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false
      });
    };

    this.#eventEditorComponent.shake(resetFormState);
  }

  #handleCloseClick = () => {
    this.destroy();
  };

  #handleFormReset = () => {
    this.destroy();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point
    );
  };

  #escKeyDownHandler = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.destroy();
    }
  };
}
