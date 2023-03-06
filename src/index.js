import './style.css';
import {Truck, PassengerCar, GasCar} from './modules/car';
import {Station} from './modules/station';

const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
  gasCar: [
    ['ford', 'GAS', 55, 'gas'],
    ['mazda', 'GAS', 55, 'gas'],
    ['lada', 'GAS', 55, 'gas'],
    ['volvo', 'GAS', 55, 'gas'],
    ['mercedes', 'GAS', 55, 'gas'],
    ['audi', 'GAS', 55, 'gas'],
    ['kia', 'GAS', 55, 'gas'],
    ['peugeot', 'GAS', 55, 'gas'],
  ],
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomCar = (listCar) =>
  listCar[(Math.floor(Math.random() * listCar.length))];

const getTestCar = (cars) => {
  const typeCar = getRandomInt(0, 3);
  console.log('typeCar: ', typeCar);

  let listCar;
  let randomCar;

  switch (typeCar) {
    case 0:
      listCar = cars.passangerCar;
      randomCar = getRandomCar(listCar);
      return new PassengerCar(...randomCar);

    case 1:
      listCar = cars.truck;
      randomCar = getRandomCar(listCar);
      return new Truck(...randomCar);

    case 2:
      listCar = cars.gasCar;
      randomCar = getRandomCar(listCar);
      return new GasCar(...randomCar);
  }
};

const station = new Station([
  {
    type: 'petrol',
    count: 3,
    speed: 5,
  },
  {
    type: 'diesel',
    count: 2,
    speed: 20,
  },
  {
    type: 'diesel',
  },
  {
    type: 'gas',
    cpunt: 2,
    speed: 10,
  },
], '.app');

open.addEventListener('click', () => {
  station.init();
  console.log(station);
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar(testArray));
  });
});
