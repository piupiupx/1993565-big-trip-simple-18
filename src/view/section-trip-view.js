import {createElement} from '../render.js';

const createSectionTripEvents = () => (
  `<section class="trip-events">
            </section>`);

export default class SortView {
  getTemplate() {
    return createSectionTripEvents();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
