// Define a function named pick
const pick = (object, keys) => {
    // Use the reduce method to iterate over the keys array
    return keys.reduce((obj, key) => {
      // Check if the object is not null or undefined and if it has the specified key
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        // If the object has the key, assign its value to the resulting object
        obj[key] = object[key];
      }
      // Return the resulting object
      return obj;
    }, {}); // Initialize the accumulator as an empty object
  };
  
  // Export the pick function as a module
  module.exports = pick;
  