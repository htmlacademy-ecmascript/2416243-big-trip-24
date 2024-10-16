import AbstractView from '../framework/view/abstract-view.js';
import { calculateDuration, convertDate, convertDuration, getCapitalized } from '../utils/general.js';
import { DateFormat } from '../constants.js';
import he from 'he';

const createEventSelectedOffersTemplate = (selectedOffers) => {
  if (selectedOffers.length === 0) {
    return '';
  }

  return `
    <ul class="event__selected-offers">
      ${selectedOffers.map((selectedOffer) => (`
      <li class="event__offer">
        <span class="event__offer-title">${selectedOffer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${selectedOffer.price}</span>
      </li>`)).join('')}
    </ul>`;
};

const createEventItemTemplate = (point, offers, destinations) => {
  const { basePrice, dateFrom, dateTo, isFavorite, type } = point;

  const defaultOffers = offers.find((offer) => offer.type === point.type).offers;
  const selectedOffers = defaultOffers.filter((defaultOffer) => point.offers.includes(defaultOffer.id));
  const destination = destinations.find((item) => item.id === point.destination);

  const startDate = convertDate(dateFrom, DateFormat.MONTH_DAY);
  const startTime = convertDate(dateFrom, DateFormat.TIME);
  const endTime = convertDate(dateTo, DateFormat.TIME);
  const duration = convertDuration(calculateDuration(dateFrom, dateTo));
  const favorite = isFavorite ? 'event__favorite-btn--active' : '';

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateFrom}">${startDate}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type} icon">
        </div>
        <h3 class="event__title">${getCapitalized(type)} ${getCapitalized(he.encode(destination.name))}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${endTime}</time>
          </p>
          <p class="event__duration">${duration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        ${createEventSelectedOffersTemplate(selectedOffers)}
        <button class="event__favorite-btn ${favorite}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
};

export default class EventsItemView extends AbstractView {
  #point = null;
  #destinations = [];
  #offers = [];

  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({ point, offers, destinations, onEditClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createEventItemTemplate(this.#point, this.#offers, this.#destinations);
  }

  #editClickHandler = () => this.#handleEditClick();

  #favoriteClickHandler = () => this.#handleFavoriteClick();
}
