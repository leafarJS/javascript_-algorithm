let sumRange = (num) => {
  if (num === 1) return 1;
  let total = num + sumRange(num - 1);
  console.log(total);
  return total;
};

console.log(sumRange(13));
