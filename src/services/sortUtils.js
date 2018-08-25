
function createSortValue(value) {
  return {
    value,
    fillColor: "rgba(220,220,220,0.5)",
    strokeColor: "rgba(220,220,220,0.8)",
    active: false,
    pivot: false
  };
}

export {createSortValue};
