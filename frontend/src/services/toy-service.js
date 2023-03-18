import { storageService } from './async-storage.service.js';
import { httpService } from './http.service.js';
import { utilService } from './util.service.js';

export const toyService = {
  query,
  remove,
  getById,
  getEmptyToy,
  save,
};

const KEY = 'toy_DB';
const BASE_URL = 'toy/';
_createToys();

function query(filterBy = {}) {
  return storageService.query(KEY).then((toys) => {
    return _filterToys(filterBy, toys);
  });
  // return httpService.get(BASE_URL, filterBy);
}

function getById(toyId) {
  console.log('toyId: ', toyId);

  return storageService.get(KEY, toyId);
  // return httpService.get(BASE_URL + toyId);
}

function remove(toyId) {
  return storageService.remove(KEY, toyId);
  // return httpService.delete(BASE_URL + toyId);
}

function save(toyToSave) {
  return toyToSave._id ? storageService.put(KEY, toyToSave) : storageService.post(KEY, toyToSave);

  // return toyToSave._id ? httpService.put(BASE_URL, toyToSave) : httpService.post(BASE_URL, toyToSave);
}

function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: '',
    labels: [],
    createdAt: Date.now(),
    inStock: true,
  };
}

function _filterToys(filterBy, toys) {
  const { name, labels, sort, inStock } = filterBy;
  // FILTER BY NAME
  const regex = new RegExp(name, 'i');
  let filteredToys = toys.filter((toy) => regex.test(toy.name));

  // FILTER BY STOCK
  if (inStock) filteredToys = filteredToys.filter((toy) => toy.inStock);

  // FILTER BY LABELS
  // if (labels.length) {
  //   labels.map((lab) => {
  //     return (filteredToys = filteredToys.filter((toy) => toy.labels.includes(lab)));
  //   });
  // }

  // SORT
  filteredToys.sort((toy1, toy2) =>
    sort === 'name' ? toy1[sort].localeCompare(toy2[sort]) : toy1[sort] - toy2[sort]
  );

  return filteredToys;
}

// function _filterToys(filterBy, toys) {
//   if (!filterBy) return toys;
//   const { name } = filterBy;

//   const regex = new RegExp(name, 'i');
//   toys = toys.filter((toys) => regex.test(toys.name));

//   return toys;
// }

function _createToys() {
  let toys = JSON.parse(localStorage.getItem(KEY));

  if (!toys || !toys.length) {
    toys = [
      _createToy('Lego Car', 100),
      _createToy('Baby Doll', 50),
      _createToy('Cowboy hat', 20),
      _createToy('Race Car', 150),
      _createToy('Godzilla', 75),
      _createToy('Balloons', 20),
      _createToy('RC Car', 450),
      _createToy('Water Gun', 75),
      _createToy('Real Gun', 220),
      _createToy('Balloons', 20),
      _createToy('RC Car', 450),
      _createToy('Water Gun', 75),
      _createToy('Real Gun', 220),
      _createToy('Real Gun', 220),
      _createToy('Balloons', 20),
      _createToy('RC Car', 450),
      _createToy('Water Gun', 75),
      _createToy('Real Gun', 220),
    ];
    localStorage.setItem(KEY, JSON.stringify(toys));
  }
  return toys;
}

function _createToy(name, price) {
  return {
    _id: utilService.makeId(),
    name,
    price,
    labels:
      Math.random() < 0.5
        ? ['Science', 'Remote controlled', 'Doll']
        : ['Indie', 'Battery powered', 'Collectable'],
    createdAt: Date.now(),
    inStock: true,
    imgUrl: 'https://source.unsplash.com/random/?cats&4',
  };
}
