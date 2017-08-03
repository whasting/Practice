// Given two strings and three edit functions
// (insert, replace, and delete)
// Return true if the two strings are 0 - 1 edit apart
// Return false if the two strings are more than one edit apart

// ATTEMPT 2 **********************************************************
function oneEdit( originalStr, newStr ) {
  if (typeof(originalStr) !== 'string' || typeof(newStr) !== 'string') {
    return false;
  } else if (originalStr === newStr) {
    return true;
  }

  const ogLength = originalStr.length;
  const newLength = newStr.length;
  let diff = 0;

  if (newLength === ogLength + 1) {
    // Insert (n + 1), skip char in newStr
    diff = checkInsertAndDelete(originalStr, newStr, newLength);

  } else if (newLength === ogLength - 1) {
    // Delete (n - 1), skip char in originalStr
    diff = checkInsertAndDelete(originalStr, newStr, ogLength);

  } else if (newLength === ogLength) {
    // Replace (n), count differences
    diff = checkReplace(originalStr, newStr, ogLength);

  } else {
    return false;

  }
  return (diff < 2);

}

function checkInsertAndDelete(originalStr, newStr, strLength) {
  let i = 0;
  let j = 0;
  let diff = 0;

  while (i < strLength) {
    if (originalStr[i] !== newStr[j]) {
      diff++;
      printVars(originalStr, newStr, i, j, diff);
    } else {
      printVars(originalStr, newStr, i, j, diff);
      j++;
    }

    if (diff > 1) break;

    i++;
  }
  return diff;

}

function checkReplace(originalStr, newStr, strLength) {
  let i = 0;
  let j = 0;
  let diff = 0;

  while (i < strLength) {
    if (originalStr[i] !== newStr[j]) {
      diff++;
    }
    printVars(originalStr, newStr, i, j, diff);

    if (diff > 1) break;

    i++;
    j++;
  }
  return diff;

}

function printVars(originalStr, newStr, i, j, diff) {
  console.log(
    [originalStr[i], newStr[j]],
    originalStr[i] !== newStr[j],
    {'i': i, 'j': j, 'diff': diff}
  );
}
