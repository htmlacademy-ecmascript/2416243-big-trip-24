import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { getCapitalized } from '../utils/general.js';
import { convertDate } from '../utils/date.js';
import { DateFormat, EVENT_TYPES, generalFlatpickrConfig } from '../constants.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import he from 'he';

const createEventTypeItemTemplate = (type, pointId) => `
  ${EVENT_TYPES.map((eventType) => (`
    <div class="event__type-item">
      <input
        id="event-type-${eventType}-${pointId}"
        class="event__type-input  visually-hidden"
        type="radio"
        name="event-type"
        value="${eventType}"
        ${eventType === type ? 'checked' : ''}>
      <label
        class="event__type-label  event__type-label--${eventType}"
        for="event-type-${eventType}-${pointId}">${getCapitalized(eventType)}</label>
    </div>`
  )).join('')}`;

const createEventDestinationListTemplate = (destinations) => destinations.map((destination) => `<option value="${destination.name}"></option>`).join('');

const createEventAvailableOffersTemplate = (defaultOffers, selectedOffers, pointId, isDisabled) => {
  const convertOfferTitle = (title) => title.toLowerCase().split(' ').join('-');

  if (defaultOffers.length === 0) {
    return '';
  }

  return `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${defaultOffers.map((defaultOffer) => (`
      <div class="event__offer-selector">
        <input
          class="event__offer-checkbox  visually-hidden"
          id="${defaultOffer.id}"
          type="checkbox"
          name="event-offer-${convertOfferTitle(defaultOffer.title)}-${defaultOffer.id}"
          ${selectedOffers.map((selectedOffer) => selectedOffer.id).includes(defaultOffer.id) ? 'checked' : ''}
          ${isDisabled ? 'disabled' : ''}>
        <label class="event__offer-label" for="${defaultOffer.id}">
          <span class="event__offer-title">${defaultOffer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${defaultOffer.price}</span>
        </label>
      </div>`)).join('')}
    </div>
  </section>`;
};

const createPicturesTemplate = (pictures) => {
  if (pictures.length === 0) {
    return '';
  }

  return `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${pictures.map((picture) => (`<img class="event__photo" src="${picture.src}" alt="${picture.description}">`)).join('')}
    </div>
  </div>`;
};

const createEventSectionDestinationTemplate = (description, pictures) => {
  if (!description) {
    return '';
  }

  return `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>

    ${createPicturesTemplate(pictures)}
  </section>`;
};

const createEventDetailsTemplate = (defaultOffers, selectedOffers, description, pictures, pointId, isDisabled) => {
  if (defaultOffers.length === 0 && !description) {
    return '';
  }

  return `
    <section class="event__details">
      ${createEventAvailableOffersTemplate(defaultOffers, selectedOffers, pointId, isDisabled)}
      ${createEventSectionDestinationTemplate(description, pictures)}
    </section>`;
};

const createRollupButtonTemplate = (id) => {
  if (id) {
    return `
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>`;
  }

  return '';
};

const createEventEditorTemplate = (point, offers, destinations)=> {
  const defaultOffers = offers.find((offer) => offer.type === point.type).offers;
  const selectedOffers = defaultOffers.filter((defaultOffer) => point.offers.includes(defaultOffer.id));
  const eventDestination = destinations.find((item) => item.id === point.destination);

  const { basePrice, dateFrom, dateTo, type, isDisabled, isSaving, isDeleting } = point;
  const { description, name, pictures } = eventDestination || {};
  const pointId = point.id || 0;

  const startTime = convertDate(dateFrom, DateFormat.DATE_AND_TIME);
  const endTime = convertDate(dateTo, DateFormat.DATE_AND_TIME);

  const setButtonValue = () => {
    if (pointId === 0) {
      return 'Cancel';
    }

    return isDeleting ? 'Deleting...' : 'Delete';
  };

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${pointId}" type="checkbox" ${isDisabled ? 'disabled' : ''}>

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                ${createEventTypeItemTemplate(type, pointId)}

              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${pointId}">
              ${getCapitalized(type)}
            </label>
            <input
              class="event__input  event__input--destination"
              id="event-destination-${pointId}"
              type="text"
              name="event-destination"
              value="${he.encode(name || '')}"
              list="destination-list-${pointId}"
              autocomplete="off"
              ${isDisabled ? 'disabled' : ''}
              required>
            <datalist id="destination-list-${pointId}">
              ${createEventDestinationListTemplate(destinations)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
            <input
              class="event__input  event__input--time"
              id="event-start-time-${pointId}"
              type="text"
              name="event-start-time"
              value="${startTime}"
              ${isDisabled ? 'disabled' : ''}
              required>

            &mdash;

            <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
            <input
              class="event__input  event__input--time"
              id="event-end-time-${pointId}"
              type="text"
              name="event-end-time"
              value="${endTime}"
              ${isDisabled ? 'disabled' : ''}
              required>
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-${pointId}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input
              class="event__input  event__input--price"
              id="event-price-${pointId}"
              type="number"
              name="event-price"
              value="${basePrice}"
              min="1"
              max="10000"
              ${isDisabled ? 'disabled' : ''}>
          </div>

          <button
            class="event__save-btn  btn  btn--blue"
            type="submit"
            ${isSaving ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>

          <button
            class="event__reset-btn"
            type="reset">${setButtonValue()}</button>

          ${createRollupButtonTemplate(point.id)}
        </header>
        ${createEventDetailsTemplate(defaultOffers, selectedOffers, description, pictures, pointId, isDisabled)}
      </form>
    </li>`;
};

export default class EventEditorView extends AbstractStatefulView {
  #destinations = [];
  #offers = [];

  #handleFormSubmit = null;
  #handleEditClick = null;
  #handleFormReset = null;

  #dateFromPicker = null;
  #dateToPicker = null;

  constructor({ point, offers, destinations, onEditClick, onFormSubmit, onFormReset }) {
    super();
    this._setState(EventEditorView.parsePointToState(point));
    this.#offers = offers;
    this.#destinations = destinations;

    this.#handleEditClick = onEditClick;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormReset = onFormReset;

    this._restoreHandlers();
  }

  get template() {
    return createEventEditorTemplate(this._state, this.#offers, this.#destinations);
  }

  static parsePointToState(point) {
    return {
      ...point,
      isDisabled: false,
      isSaving: false,
      isDeleting: false
    };
  }

  static parseStateToPoint(state) {
    const point = {...state};

    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  }

  reset(point) {
    this.updateElement(EventEditorView.parsePointToState(point));
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn')?.addEventListener('click', this.#editClickHandler);
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('form').addEventListener('reset', this.#formResetHandler);
    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__available-offers')?.addEventListener('change', this.#availableOffersChangeHandler);
    this.element.querySelector('.event__field-group--price').addEventListener('input', this.#priceInputHandler);

    this.#setDatePicker();
  }

  removeElement() {
    super.removeElement();

    if (this.#dateFromPicker) {
      this.#dateFromPicker.destroy();
      this.#dateFromPicker = null;
    }
    if (this.#dateToPicker) {
      this.#dateToPicker.destroy();
      this.#dateToPicker = null;
    }
  }

  #setDatePicker = () => {
    const startTime = this.element.querySelector(`#event-start-time-${this._state.id}`);
    const endTime = this.element.querySelector(`#event-end-time-${this._state.id}`);

    this.#dateFromPicker = flatpickr(
      startTime,
      {
        ...generalFlatpickrConfig,
        maxDate: this._state.dateTo,
        onChange: this.#changeDateHandler('dateFrom'),
        onClose: (_, userDate) => this.#dateToPicker.set('minDate', userDate)
      }
    );

    this.#dateToPicker = flatpickr(
      endTime,
      {
        ...generalFlatpickrConfig,
        maxDate: this._state.dateFrom,
        onChange: this.#changeDateHandler('dateTo'),
        onClose: (_, userDate) => this.#dateFromPicker.set('maxDate', userDate)
      }
    );
  };

  #changeDateHandler = (name) => ([userDate]) => {
    this._setState({
      [name]: userDate
    });
  };

  #typeChangeHandler = (event) => {
    this.updateElement({
      type: event.target.value
    });
  };

  #destinationChangeHandler = (event) => {
    const newDestination = this.#destinations.find((destination) => destination.name === event.target.value);

    if (newDestination) {
      this.updateElement({
        destination: newDestination.id
      });
    }

    event.target.value = '';
  };

  #availableOffersChangeHandler = (evt) => {
    evt.preventDefault();
    const offersArr = this.element.querySelectorAll('.event__offer-checkbox:checked');
    const offers = Array.from(offersArr,(offer) => offer.id);
    this._setState({offers: offers});
  };

  #priceInputHandler = (event) => {
    this._setState({
      basePrice: parseInt(event.target.value, 10)
    });
  };

  #editClickHandler = () => this.#handleEditClick();

  #formSubmitHandler = (event) => {
    event.preventDefault();
    this.#handleFormSubmit(EventEditorView.parseStateToPoint(this._state));
  };

  #formResetHandler = (event) => {
    event.preventDefault();
    this.#handleFormReset(EventEditorView.parseStateToPoint(this._state));
  };
}
