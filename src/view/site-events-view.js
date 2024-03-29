import AbstractClass from './abstract-class';

const createEventsTemplate = (event) => {
  const {data, eventIcon,
    eventTitle,
    periodTime,
    waitingTime,
    eventCost,
    eventServises,
    isFavorite, serviseCost} = event;

  const favoriteClass = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';
  return `<li class="trip-events__item">
  <div class="event">
        <time class="event__date" datetime="2019-03-18">${data}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="${eventIcon}" alt="Event type icon">
        </div>
        <h3 class="event__title">${eventTitle}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${periodTime[0]}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${periodTime[1]}</time>
          </p>
          <p class="event__duration">${waitingTime}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${eventCost}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">${eventServises}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${serviseCost}</span>
          </li>
        </ul>
        <button class="${favoriteClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div></li>`;
};

export default class TripEventView extends AbstractClass{
  #tripEvent = null;

  constructor(tripEvent){
    super();
    this.#tripEvent = tripEvent;
  }

  get template() {
    return createEventsTemplate(this.#tripEvent);
  }

  setEditCardToFormClickHandler = (callback) => {
    this._callback.editCardToFormClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editCardToFormClick();
  }

  setFavoriteClickHandler = (callback) =>{
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  #favoriteClickHandler = (evt) =>{
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}
