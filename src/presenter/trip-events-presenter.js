import WaypointListView from '../view/waypoint-list.js';
import WaypointItemView from '../view/waypoint-item.js';
import SortView from '../view/sort-view.js';
import FormEditView from '../view/form-edit-view.js';
import {render} from '../render.js';

export default class TripEventsPresenter {

  waypointListComponent = new WaypointListView();

  init = (blockContainer) => {
    this.blockContainer = blockContainer;

    render(new SortView(), this.blockContainer);
    render(this.waypointListComponent, this.blockContainer);
    render(new FormEditView(), this.waypointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new WaypointItemView(), this.waypointListComponent.getElement());
    }

  };

}
