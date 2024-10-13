import Observable from '../framework/observable.js';
import { points } from '../mocks/points.js';
import { destinations } from '../mocks/destinations.js';
import { offers } from '../mocks/offers.js';
import { updateItem } from '../util/utils.js';

export default class PointModel extends Observable {
  #points = null;
  #destinations = null;
  #offers = null;

  constructor() {
    super();
    this.#points = [];
    this.#destinations = [];
    this.#offers = [];
  }

  init() {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  updatePoint(updateType, updatedPoint) {
    this.#points = updateItem(this.#points, updatedPoint);
    this._notify(updateType, updatedPoint.id);
  }

  addPoint(updateType, updatedPoint) {
    this.#points.push(updatedPoint);
    this._notify(updateType, updatedPoint);
  }

  deletePoint(updateType, updatedPoint) {
    this.#points = this.#points.filter((item) => item.id !== updatedPoint.id);
    this._notify(updateType, updatedPoint);
  }
}
