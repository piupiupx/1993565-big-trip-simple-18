import {createElement} from '../render.js';

const createEmptyTemplate = () => (
  `<section class="trip-events">
          <h2 class="">Trip events</h2>

          <p class="trip-events__msg">Click New Event to create your first point</p>

          <!--
            Значение отображаемого текста зависит от выбранного фильтра:
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Future — 'There are no future events now'.
          -->
        </section>`);

export default class EmptyPageView {
  getTemplate() {
    return createEmptyTemplate();
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
