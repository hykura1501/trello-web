export const mapOrder = (originalArray, orderArray, key) => {
  return [...originalArray].sort(
    (a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  );
};
