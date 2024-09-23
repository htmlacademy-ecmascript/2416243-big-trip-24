import { render, RenderPosition } from '../render.js';
import TripInfoView from '../view/trip-info-view.js';
import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import EventEditorView from '../view/event-editor-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import EventAddButtonView from '../view/event-add-button-view.js';
import { getDefaultPoint } from '../utils.js';

export default class Presenter {
  tripInfoComponent = new TripInfoView();
  filtersComponent = new FiltersView();
  addButtonComponent = new EventAddButtonView();
  sortComponent = new SortView();
  listComponent = new EventsListView();

  constructor({infoContainer, contentContainer, filtersContainer, pointModel}) {
    this.infoContainer = infoContainer;
    this.contentContainer = contentContainer;
    this.filtersContainer = filtersContainer;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    render(this.tripInfoComponent, this.infoContainer, RenderPosition.AFTERBEGIN);
    render(this.filtersComponent, this.filtersContainer);
    render(this.addButtonComponent, this.infoContainer);
    render(this.sortComponent, this.contentContainer);
    render(this.listComponent, this.contentContainer);
    render(new EventEditorView(getDefaultPoint(), destinations, offers), this.listComponent.getElement());
    render(new EventEditorView(points[4], destinations, offers), this.listComponent.getElement());

    for (const point of points) {
      render(new EventsItemView(point, destinations, offers), this.listComponent.getElement());
    }
  }
}
