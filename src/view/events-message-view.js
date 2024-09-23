import { createElement } from '../render.js';

const createEventsMessageTemplate = () => `
    <p class="trip-events__msg"></p>`;

export default class EventsMessageView {
  getTemplate() {
    return createEventsMessageTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
