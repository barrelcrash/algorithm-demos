
var defaultSortArray = [
  4, 8, 3, 0, 2, 8, 3, 7, 9, 5
];

function getStartArray() {
  return getArrayString(defaultSortArray);
}

function getResultArray() {
  var resultArray = defaultSortArray;
  quicksort_int(resultArray, 0, resultArray.length - 1);
  return getArrayString(resultArray);
}

function quicksort_int(array, left, right) {

  // nothing to do
  if (left >= right) {
    return;
  }

  swap(array, left, randomIntIncl(left, right)); // set pivot
  
  var compInd = left; // comparison index

  for (var i = left + 1; i <= right; i++) {
    if (compareNum(array[i], array[left]) < 0) {
      compInd++;
      swap(array, compInd, i);
    }
  }

  swap(array, left, compInd); // reset pivot
  quicksort_int(array, left, compInd - 1); // sort left of pivot
  quicksort_int(array, compInd + 1, right); // sort right of pivot
}

function compareNum(a, b) {
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

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function randomIntIncl(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getArrayString(array) {
  var arrayString = "";
  for (var [i, v] of array.entries()) {
    arrayString += v;
    if (i !== array.length - 1) {
      arrayString += ", ";
    }
  }
  return arrayString;
}

export default {
  getStartArray,
  getResultArray
};
