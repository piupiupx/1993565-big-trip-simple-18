import WaypointListView from '../view/waypoint-list-view.js';
import WaypointItemView from '../view/waypoint-item-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/section-trip-view.js';
import FormEditView from '../view/form-edit-view.js';
import {render} from '../render.js';


import FormСreateView from '../view/form-create-view.js';
export default class TripEventsPresenter {
  tripList = new TripListView();
  waypointListComponent = new WaypointListView();
  //waypointItem = new WaypointItemView();
  init = (blockContainer, pointModels) => {
    //this.waypointItem = new WaypointItemView();
    this.pointModels = pointModels.getPoints();
    this.blockContainer = blockContainer;

    render(new SortView(), this.blockContainer);
    render(this.waypointListComponent, this.blockContainer);
    render(new FormСreateView(), this.waypointListComponent.getElement());


    console.log('this.waypointListComponent.getElement()', this.waypointListComponent.getElement())

    for (let i = 1; i < this.pointModels.length; i++) {
      console.log('1', this.pointModels[i])
      render(new WaypointItemView(this.pointModels[i]), this.waypointListComponent.getElement());
    }

  };

}
