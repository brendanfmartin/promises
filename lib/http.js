/**
 * Fake API call w/ custom timeout
 * @param time
 * @returns {Promise<unknown>}
 */
const fakeApiCall = async (time) => {
  console.log(`started fakeApiCall that will take ${time}ms`);
  return new Promise((resolve) => {
    return setTimeout(() => {
      const message = `finished fakeApiCall in ${time}ms`;
      console.log(message);
      resolve(message);
    }, time);
  });
};

/**
 * Fake API call w/ custom timeout and returns an error
 * @param time
 * @returns {Promise<unknown>}
 */
const fakeFailedApiCall = async (time) => {
  console.log(`started fakeFailedApiCall that will take ${time}ms`);
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      const message = `finished fakeFailedApiCall in ${time}ms`;
      console.log(message);
      reject(message);
    }, time);
  });
};

exports.fakeApiCall = fakeApiCall;
exports.fakeFailedApiCall = fakeFailedApiCall;
