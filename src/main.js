import MainPresenter from './presenter/main-presenter.js';
import PointModel from './model/point-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const filtersElement = document.querySelector('.trip-controls__filters');

const pointModel = new PointModel();
const filterModel = new FilterModel();

pointModel.init();

const filterPresenter = new FilterPresenter({
  pointModel: pointModel,
  filterModel: filterModel,
  filterContainer: filtersElement
});
const mainPresenter = new MainPresenter({
  infoContainer: tripMainElement,
  contentContainer: tripEventsElement,
  pointModel: pointModel,
  filterModel: filterModel
});

filterPresenter.init();
mainPresenter.init();
