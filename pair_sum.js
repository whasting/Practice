const pairSum = (arr, target) => {
  let result = [];
  let complements = {};
  let complement;

  // find complement count
  arr.forEach((el) => {
    complement = target - el;
    if (complements[complement]) {
      complements[complement]++;
    } else {
      complements[complement] = 1;
    }
  });

  // find pairs
  arr.forEach((el) => {
    if (complements[el] && complements[el] > 0) {
      complement = target - el;
      result.push([el, complement]);
      complements[el]--;
      complements[complement]--;
    }
  });

  return result;
};

let a = [5, 6, 4, 3, 10, 5, 1];
console.log(pairSum(a, 15));
console.log(pairSum(a, 11));
console.log(pairSum(a, 7));
