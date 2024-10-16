import TripInfoView from '../view/trip-info-view.js';
import { render, remove, RenderPosition } from '../framework/render.js';

export default class TripInfoPresenter {
  #infoContainer = null;
  #infoComponent = null;
  #pointModel = null;

  constructor({ infoContainer, pointModel }) {
    this.#infoContainer = infoContainer;
    this.#pointModel = pointModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
  }

  init() {
    if (this.#infoComponent !== null) {
      remove(this.#infoComponent);
    }

    this.#infoComponent = new TripInfoView({
      points: this.#pointModel.points,
      offers: this.#pointModel.offers,
      destinations: this.#pointModel.destinations
    });

    if (this.#pointModel.points.length === 0) {
      remove(this.#infoComponent);
      return;
    }

    render(this.#infoComponent, this.#infoContainer, RenderPosition.AFTERBEGIN);
  }

  #handleModelEvent = () => {
    this.init();
  };
}
