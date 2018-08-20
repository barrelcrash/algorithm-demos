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

  initSort() {
    this.sort(this.values, 0, this.values.length - 1);
  }

  sort(array, left, right) {

    if (left === 0 && right === array.length - 1) {
      this.saveStep();
    }

    // nothing to do
    if (left >= right) {
      return;
    }

    this.swap(array, left, this.randomIntIncl(left, right)); // set pivot
    
    var compInd = left; // comparison index

    for (var i = left + 1; i <= right; i++) {
      if (this.compareNum(array[i], array[left]) < 0) {
        compInd++;
        this.swap(array, compInd, i);
      }
    }

    this.saveStep();

    this.swap(array, left, compInd); // reset pivot
    this.sort(array, left, compInd - 1); // sort left of pivot
    this.sort(array, compInd + 1, right); // sort right of pivot
  }

  compareNum(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
      console.error('compareInt: value is not a number');
      return;
    }

    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
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
