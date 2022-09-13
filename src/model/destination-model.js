import {generateDestination} from '../fishmock/destination.js';

export default class DestinationModel {
  destinations = Array.from({length: 3}, generateDestination);

  getDestinations = () => this.destinations;
}

