import AbstractView from '../framework/view/abstract-view.js';
import { getMaxDate, getMinDate, sortByDate } from '../utils/date.js';
import { LIMIT_DISPLAYED_DESTINATIONS } from '../constants.js';

const getDestinationNames = (points, destinations) => {
  const sortedPoints = points.sort(sortByDate('dateFrom'));
  const destinationNames = sortedPoints.map((point) => destinations
    .find((destination) => point.destination === destination.id))
    .map((destination) => destination.name);

  if (destinationNames.length > LIMIT_DISPLAYED_DESTINATIONS) {
    return `${destinationNames.at(0)} &mdash; ... &mdash; ${destinationNames.at(-1)}`;
  }

  return destinationNames.join(' &mdash; ');
};

const getDates = (points) => {
  const startDates = points.map((point) => point.dateFrom);
  const endDates = points.map((point) => point.dateTo);

  return `${getMinDate(startDates)}&nbsp;&mdash;&nbsp;${getMaxDate(endDates)}`;
};

const calculateOffersPrice = (points, offers) => {
  const allOffers = offers.map((offer) => offer.offers).flat();
  const selectedOffersId = points.map((point) => point.offers).flat();
  const selectedOffers = selectedOffersId.map((id) => allOffers.find((offer) => offer.id === id));

  return selectedOffers.map((offer) => offer.price).reduce((sum, current) => sum + current, 0);
};

const calculateBasePrice = (points) => points.map((point) => point.basePrice).reduce((sum, current) => sum + current, 0);

const createTripInfoTemplate = (points, offers, destinations) => `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${getDestinationNames(points, destinations)}</h1>
        <p class="trip-info__dates">${getDates(points)}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculateBasePrice(points) + calculateOffersPrice(points, offers)}</span>
      </p>
    </section>`;

export default class TripInfoView extends AbstractView {
  #points = [];
  #offers = [];
  #destinations = [];

  constructor({ points, offers, destinations }) {
    super();
    this.#points = points;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate(this.#points, this.#offers, this.#destinations);
  }
}
