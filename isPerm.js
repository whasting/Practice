// aproach

function isPerm( data ) {
  // what is data is an array of numbers and letters

  if ( Array.isArray( data ) ) {
    // approach 1
    // join strings together
    // add digits of numbers together
    // compare sums from each

  } else if ( typeof( data ) === 'string') {

  } else if ( typeof ( data ) === 'number') {

  } else {
    throw 'Parameter data must be an Array, string, or number';
  }
}

function stringToAsciiSum( str ) {
  let asciiSum = 0;

  for ( let i in str ) {
    asciiSum += str.charCodeAt( i );
  }

  return asciiSum;
}
