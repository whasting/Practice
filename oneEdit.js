// Given two strings and three edit functions
// (insert, replace, and delete)
// Return true if the two strings are 0 - 1 edit apart
// Return false if the two strings are more than one edit apart

function oneEdit( strOne, strTwo ) {
  if (strOne === strTwo) return true;

  let charCount = {};
  let ltr;

  for (let i = 0; i < strOne.length; i++) {
    ltr = strOne[i];

    if (charCount[ltr]) {
      charCount[ltr]++;
    } else {
      charCount[ltr] = 1;
    }
  }

  let oldLtrs = 0;
  let newLtrs = 0;

  for (let j = 0; j < strTwo.length; j++) {
    ltr = strTwo[j];

    if (charCount[ltr] > 0) {
      oldLtrs++;
      charCount[ltr]--;
    } else {
      newLtrs++;
    }
  }

  const replaceChr = (newLtrs === 1 && oldLtrs === strOne.length - 1);
  const deleteChr = (newLtrs === 0 && oldLtrs === strOne.length - 1);
  const insertChr = (newLtrs === 1 && oldLtrs === strOne.length);

  return replaceChr || deleteChr || insertChr;
}
