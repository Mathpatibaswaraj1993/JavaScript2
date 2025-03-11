// Function to clone an array
let array_Clone = function(arr1) {
    // Using the slice method to create a shallow copy of the input array
    return arr1.slice(0);
  };
  
  // Testing the function with an array
  console.log(array_Clone([1, 2, 5, 9]));
  
  // Testing the function with an array containing nested arrays
  console.log(array_Clone([1, 2, [4, 0]]));
  