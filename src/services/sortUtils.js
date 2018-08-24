
function createSortValue(value) {
  return {
    value,
    fill: "rgba(220,220,220,0.5)",
    outline: "rgba(220,220,220,0.8)",
    active: false,
    pivot: false
  };
}

export {createSortValue};
