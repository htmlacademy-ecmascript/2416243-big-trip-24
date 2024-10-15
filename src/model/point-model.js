import Observable from '../framework/observable.js';
import { updateItem } from '../util/utils.js';
import { UpdateType } from '../constants.js';

export default class PointModel extends Observable {
  #pointsApiService = null;

  #points = [];
  #destinations = [];
  #offers = [];

  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;
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

  async init() {
    try {
      this.#points = await this.#pointsApiService.getPoints();
      this.#offers = await this.#pointsApiService.getOffers();
      this.#destinations = await this.#pointsApiService.getDestinations();
    } catch {
      this.#points = [];
      this.#offers = [];
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  }

  async updatePoint(updateType, point) {
    const updatedPoint = await this.#pointsApiService.updatePoint(point);
    this.#points = updateItem(this.#points, updatedPoint);
    this._notify(updateType, updatedPoint.id);
  }

  async addPoint(updateType, point) {
    const newPoint = await this.#pointsApiService.addPoint(point);
    this.#points.push(newPoint);
    this._notify(updateType);
  }

  deletePoint(updateType, point) {
    this.#points = this.#points.filter((item) => item.id !== point.id);
    this._notify(updateType, point);
  }
}
