// Define a higher-order function named catchAsync
const catchAsync = (fn) => (req, res, next) => {
    // Wrap the execution of the provided function `fn` inside a promise chain
    Promise.resolve(fn(req, res, next))
        // If the promise resolves successfully, continue the promise chain
        .catch((err) => next(err)); // If the promise rejects (throws an error), catch it and pass it to the next middleware
};

// Export the catchAsync function to be used in other parts of the application
module.exports = catchAsync;
