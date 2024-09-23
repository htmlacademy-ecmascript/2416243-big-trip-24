import Presenter from './presenter/presenter.js';
import PointModel from './model/point-model.js';

const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const pointModel = new PointModel();
pointModel.init();

const presenter = new Presenter({
  infoContainer: tripMainElement,
  contentContainer: tripEventsElement,
  filtersContainer: filtersElement,
  pointModel: pointModel
});

presenter.init();
