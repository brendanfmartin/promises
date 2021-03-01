/**
 * Fake API call w/ custom timeout
 * @param time
 * @returns {Promise<unknown>}
 */
const fakeApiCall = async (time) => {
  console.log(`started api call that will take ${time}ms`);
  return new Promise((resolve) => {
    return setTimeout(() => {
      const message = `fakeApiCall finished in ${time}ms`;
      console.log(message);
      resolve(message);
    }, time);
  });
};

exports.fakeApiCall = fakeApiCall;
