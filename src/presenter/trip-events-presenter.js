import WaypointListView from '../view/waypoint-list-view.js';
import WaypointItemView from '../view/waypoint-item-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/section-trip-view.js';
import {render} from '../render.js';


import FormСreateView from '../view/form-create-view.js';
export default class TripEventsPresenter {
  tripList = new TripListView();
  waypointListComponent = new WaypointListView();
  init = (blockContainer, pointModels) => {
    this.pointModels = pointModels.getPoints();
    this.blockContainer = blockContainer;

    render(new SortView(), this.blockContainer);
    render(this.waypointListComponent, this.blockContainer);
    render(new FormСreateView(), this.waypointListComponent.getElement());


    for (let i = 1; i < this.pointModels.length; i++) {
      render(new WaypointItemView(this.pointModels[i]), this.waypointListComponent.getElement());
    }

  };

}
