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
  let i = 0;
  let j = 0;
  let diff = 0;

  if (newLength === ogLength + 1) {
    // Insert (n + 1), skip char in newStr
    // charOne === charTwo.next
    while (j < newLength) {
      if (originalStr[i] !== newStr[j]) {
        diff++;
        printVars(originalStr, newStr, i, j, diff);
      } else {
        printVars(originalStr, newStr, i, j, diff);
        i++;
      }


      j++;
      if (diff > 1) break;

    }
  } else if (newLength === ogLength - 1) {
    // Delete (n - 1), skip char in originalStr
    // charOne.next === charTwo
    while (i < ogLength) {
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

  } else if (newLength === ogLength) {
    // Replace (n)
    // Count differences
    while (i < ogLength) {
      if (originalStr[i] !== newStr[j]) {
        diff++;
      }
      printVars(originalStr, newStr, i, j, diff);

      if (diff > 1) break;

      i++;
      j++;
    }
  } else {

    return false;
  }

  return (diff < 2);
}

function printVars(originalStr, newStr, i, j, diff) {
  console.log(
    [originalStr[i], newStr[j]],
    originalStr[i] !== newStr[j],
    {'i': i, 'j': j, 'diff': diff}
  );
}
