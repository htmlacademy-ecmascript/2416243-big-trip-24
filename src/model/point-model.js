import Observable from '../framework/observable.js';
import { updateItem } from '../utils/general.js';
import { UpdateType } from '../constants.js';

export default class PointModel extends Observable {
  #pointsApiService = null;

  #points = [];
  #destinations = [];
  #offers = [];

  #isLoading = true;
  #isLoadingFailed = false;

  constructor({ pointsApiService }) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  async init() {
    try {
      this.#points = await this.#pointsApiService.getPoints();
      this.#offers = await this.#pointsApiService.getOffers();
      this.#destinations = await this.#pointsApiService.getDestinations();

      this.#isLoading = false;
    } catch {
      this.#points = [];
      this.#offers = [];
      this.#destinations = [];

      this.#isLoading = false;
      this.#isLoadingFailed = true;
    }

    this._notify(UpdateType.INIT);
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

  get loading() {
    return this.#isLoading;
  }

  get error() {
    return this.#isLoadingFailed;
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

  async deletePoint(updateType, point) {
    await this.#pointsApiService.deletePoint(point);
    this.#points = this.#points.filter((item) => item.id !== point.id);
    this._notify(updateType, point);
  }
}
