import {createElement} from '../render.js';

const createWaypointListTemplate = () => (
  `<ul class="trip-events__list">
   </ul>`
);

export default class WaypointListView {
  getTemplate() {
    return createWaypointListTemplate();
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
