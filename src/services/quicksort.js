import {Sort} from './sort';

// default values provided prior to user input


class QuickSort extends Sort {

  constructor() {
    if (!QuickSort.instance) {
      super(); // initialize values array and state caretaker
      QuickSort.instance = this;
    }
    return QuickSort.instance;
  }

  run() {
    console.log("running quicksort");
    let hasString =
      this.values.some(x => typeof x === 'string'); // determines comparison method
    this.sort(this.values, 0, this.values.length - 1, hasString);
  }

  sort(array, left, right, hasString) {


    if (left === 0 && right === array.length - 1) {
      this.saveStep();
    }

    // nothing to do
    if (left >= right) {
      return;
    }

    this.swap(array, left, this.randomIntIncl(left, right)); // set pivot
    
    let compInd = left; // comparison index

    for (var i = left + 1; i <= right; i++) {
      if (this.compare(array[i], array[left], hasString) < 0) {
        compInd++;
        this.swap(array, compInd, i);
      }
    }

    this.saveStep();

    this.swap(array, left, compInd); // reset pivot
    this.sort(array, left, compInd - 1); // sort left of pivot
    this.sort(array, compInd + 1, right); // sort right of pivot
  }

  compare(a, b, hasString) {

    let validTypes = ['number', 'string'];
    if (!validTypes.includes(typeof a)
      || !validTypes.includes(typeof b)) {
      throw new TypeError("Can only compare numbers and/or strings!");
    }

    if (hasString) {
      return a.toString().localeCompare(b.toString());
    }

    return a - b;
  }

  swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  randomIntIncl(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const quicksort = new QuickSort();

export {
  quicksort
};
