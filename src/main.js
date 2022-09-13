import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import DestinationModel from './model/destination-model.js';
import PointsModel from './model/way-point-model.js';
//import DestinationView from './view/destination-view.js';



const tripPageHeaderElement = document.querySelector('.page-header');
const tripСontrolsElement = tripPageHeaderElement.querySelector('.trip-controls');
const filtersElement = tripСontrolsElement.querySelector('.trip-controls__filters');
const tripPageMainElement = document.querySelector('.page-main');
const tripEventsElement = tripPageMainElement.querySelector('.trip-events');
const destinationElement = document.querySelector('.event__details');


const destinationModel = new DestinationModel();
const pointsModel = new PointsModel();
console.log(pointsModel);
const pagePresenter = new TripEventsPresenter();
render(new FiltersView(), filtersElement);
//render(new DestinationView(), destinationElement);


pagePresenter.init(tripEventsElement, pointsModel);
