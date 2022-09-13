import {createElement} from '../render.js';
import { humanizeDate} from '../util.js';

const createWaypointItemTemplate = (waypointitem) => {
  const { basePrice, dateFrom, /*dateTo,*/ offers} = waypointitem;
  const now = new Date().toLocaleTimeString().slice(0,-3);
  return `<li class="trip-events__item"><div class="event">
    <time class="event__date" datetime="${dateFrom}">${humanizeDate(dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
    </div>
    <h3 class="event__title">Taxi Amsterdam</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${now}"> ${now}</time>
        &mdash;
        <time class="event__end-time" datetime="${now}">  ${now} </time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offers}
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

export default class WaypointItemView {
  constructor(waypointitem) {
    this.waypointitem = waypointitem;
  }

  getTemplate() {
    return createWaypointItemTemplate(this.waypointitem);
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
