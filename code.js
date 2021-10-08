const getSums = (arrOfNums) => {
  return arrOfNums.reduce(
    (sums, num) => {
      // if (num % 2 == 0) {
      //   sums.evensSum += num;
      // } else {
      //   sums.oddsSum += num;
      // }
      const key = num % 2 == 0 ? "evensSum" : "oddsSum";
      sums[key] += num;
      return sums;
    },
    { oddsSum: 0, evensSum: 0 }
  );
};

console.log(getSums([1, 2, 3, 4, 5, 6]));

const getSums1 = (arrOfNums) => {
  // iterate over the numbers
  // during iteration see if number is odd or even
  return {};
};

console.log(getSums1([])); // => {oddsSum:0 evensSum:0}
console.log(getSums1([1, 3, 5])); // => {oddsSum:9, evensSum:0}
console.log(getSums1([2, 6, 8])); // => {oddsSum:0, evensSum:16}
