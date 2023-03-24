import AbstractClass from './abstract-class';

const createSiteMenuTemplate = () => (
  `<div class="trip-controls__navigation"><h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav></div>`
);

export default class SiteMenuView extends AbstractClass{
  get template(){
    return createSiteMenuTemplate();
  }
}