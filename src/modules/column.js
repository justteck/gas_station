export class Column {
  #car = null; // current filling car
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }

  set car(car) {
    this.#car = car;
  }

  get car() {
    return this.#car;
  }
}
