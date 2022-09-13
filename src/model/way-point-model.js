import {generatePoint} from '../fishmock/point.js';

export default class PointsModel {
  waypoints = Array.from({length: 5}, generatePoint);

  getPoints = () => this.waypoints;
}

