import AbstractView from '../framework/view/abstract-view.js';
import { convertDate, getCapitalized } from '../util/utils.js';
import { DATE_TIME_FORMAT, EVENT_TYPES } from '../constants.js';

const createEventTypeItemTemplate = (type) => `
  ${EVENT_TYPES.map((eventType) => (`
    <div class="event__type-item">
      <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}" ${eventType === type ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${getCapitalized(eventType)}</label>
    </div>`
  )).join('')}`;

const createEventDestinationListTemplate = (destinations) => destinations.map((destination) => `<option value="${destination.name}"></option>`).join('');

const createEventAvailableOffersTemplate = (defaultOffers, selectedOffers) => {
  const convertOfferTitle = (title) => title.toLowerCase().split(' ')[-1];

  if (defaultOffers.length === 0) {
    return '';
  }

  return `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${defaultOffers.map((defaultOffer) => (`
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${convertOfferTitle(defaultOffer.title)}-1" type="checkbox" name="event-offer-${convertOfferTitle(defaultOffer.title)}" ${selectedOffers.map((selectedOffer) => selectedOffer.id).includes(defaultOffer.id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${convertOfferTitle(defaultOffer.title)}-1">
          <span class="event__offer-title">${defaultOffer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${defaultOffer.price}</span>
        </label>
      </div>`)).join('')}
    </div>
  </section>`;
};

const createEventSectionDestinationTemplate = (description, pictures) => {
  if (!description) {
    return '';
  }

  return `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${pictures.map((picture) => (`<img class="event__photo" src="${picture.src}" alt="${picture.description}">`)).join('')}
      </div>
    </div>
  </section>`;
};

const createEventDetailsTemplate = (defaultOffers, selectedOffers, description, pictures) => {
  if (defaultOffers.length === 0 && !description) {
    return '';
  }

  return `
    <section class="event__details">
      ${createEventAvailableOffersTemplate(defaultOffers, selectedOffers)}
      ${createEventSectionDestinationTemplate(description, pictures)}
    </section>`;
};

const createEventEditorTemplate = (point, destinations, offers)=> {
  const eventDestination = destinations.find((item) => item.id === point.destination);
  const defaultOffers = offers.find((offer) => offer.type === point.type).offers;
  const selectedOffers = defaultOffers.filter((defaultOffer) => point.offers.includes(defaultOffer.id));

  const { basePrice, dateFrom, dateTo, type } = point;
  const { description, name, pictures } = eventDestination || {};

  const startTime = convertDate(dateFrom, DATE_TIME_FORMAT.DATE_AND_TIME);
  const endTime = convertDate(dateTo, DATE_TIME_FORMAT.DATE_AND_TIME);

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                ${createEventTypeItemTemplate(type)}

              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${getCapitalized(type)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name || ''}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createEventDestinationListTemplate(destinations)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTime}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        ${createEventDetailsTemplate(defaultOffers, selectedOffers, description, pictures)}
      </form>
    </li>`;
};

export default class EventEditorView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;
  #handleFormSubmit = null;
  #handleEditClick = null;

  constructor({point, destinations, offers, onFormSubmit, onEditClick}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createEventEditorTemplate(this.#point, this.#destinations, this.#offers);
  }

  #formSubmitHandler = (event) => {
    event.preventDefault();
    this.#handleFormSubmit();
  };

  #editClickHandler = (event) => {
    event.preventDefault();
    this.#handleEditClick();
  };
}
