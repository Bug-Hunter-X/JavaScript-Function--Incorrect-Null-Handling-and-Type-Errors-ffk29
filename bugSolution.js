function foo(a, b) {
  //Check if inputs are null or undefined
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; //Handle null and undefined values
  }

  //Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Handle non-number inputs
  }

  return a + b; //Perform addition if both inputs are numbers
} 