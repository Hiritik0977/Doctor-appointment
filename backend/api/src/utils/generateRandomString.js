// Export a function named generateRandomStringOfLength as a module
module.exports = generateRandomStringOfLength = (length = 10) => {
    // Initialize an empty string to store the generated random string
    let result = "";
    // Define a string containing all possible characters for the random string
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // Get the length of the characters string for random indexing
    const charactersLength = characters.length;
    // Loop 'length' times to generate the random string of desired length
    for (let i = 0; i < length; i++) {
      // Generate a random index within the range of characters string
      const randomIndex = Math.floor(Math.random() * charactersLength);
      // Append the character at the randomly generated index to the result string
      result += characters.charAt(randomIndex);
    }
  
    // Return the generated random string
    return result;
  };
  