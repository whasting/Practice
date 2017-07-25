function isPerm( data1, data2 ) {
  return processData( data1 ) === processData( data2 );
}

function processData( data ) {
  let asciiSum = 0;

  if ( Array.isArray( data ) ) {

    data.forEach((el) => {
      asciiSum += processData( el );
    });

  } else if ( typeof( data ) === 'string') {

    asciiSum = stringToAsciiSum( data );

  } else if ( typeof ( data ) === 'number') {

    const dataString = data.toString();
    asciiSum = stringToAsciiSum( dataString );

  } else {

    throw "You must pass in two parameters of type Array, string, or number";

  }

  return asciiSum;
}

function stringToAsciiSum( str ) {
  let asciiSum = 0;

  for ( let i = 0; i < str.length; i++ ) {
    asciiSum += str.charCodeAt( i );
  }

  return asciiSum;
}
