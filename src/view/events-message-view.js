import AbstractView from '../framework/view/abstract-view.js';

const createEventsMessageTemplate = () => `
    <p class="trip-events__msg"></p>`;

export default class EventsMessageView extends AbstractView {
  get template() {
    return createEventsMessageTemplate();
  }
}
