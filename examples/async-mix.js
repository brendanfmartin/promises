const { fakeApiCall } = require('../lib/http');

/**
 * three things happen here
 *
 * pull batch from the queue. must be single threaded
 * send batches to external api. can be concurrent
 * delete batches. can be concurrent
 *
 */
const fakeHandler = async () => {
  // pulling from queue
  try {
    let x = 0;
    while (x < 3) {
      await fakeApiCall(10 + x);
      x++
    }
  } catch (e) {
    console.error(e)
  }


};

fakeHandler()
