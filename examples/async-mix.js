const { fakeApiCall, fakeFailedApiCall } = require('../lib/http');

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

  // sending
  try {
    const r = await Promise.allSettled([fakeFailedApiCall(Math.random()), fakeApiCall(Math.random())])
    console.log(r)
  } catch (e) {
    console.error(e)
  }

  // deleting
  try {
    const r = await Promise.allSettled([fakeApiCall(Math.random()), fakeApiCall(Math.random())])
    console.log(r)
  } catch (e) {
    console.error(e)
  }

};

fakeHandler()
