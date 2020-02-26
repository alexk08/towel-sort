
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix !== undefined) {
    matrix.forEach(function(item, i) {
      const row = (i%2 === 1) ? item.reverse() : item;
      row.forEach(function(item) {
        result.push(item);
      });
    });
  }
  return result;
}
