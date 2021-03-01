const { fakeApiCall } = require('./lib/http');

/**
 * calling multiple promises
 */
const allSettledTest = async () => {
  try {
    const t = await Promise.allSettled([fakeApiCall(1000), fakeApiCall(10)]);
    console.log(t);
  } catch (e) {
    console.error(e);
  }
};

/**
 * while loop w/ promises
 */
const whileLoopTest = async () => {
  let x = 0;
  while (x < 5) {
    x++;
    await Promise.allSettled([fakeApiCall(1000), fakeApiCall(10)]);
  }
};

/**
 * catching error
 */
const catchErrorTest = () => {
  const p = Promise.reject('no');
  p.catch((e) => {
    console.error(e);
    throw e;
  }).catch(e => console.error(e));
};

/**
 * catch and throw
 * @returns {Promise<void>}
 */
const catchErrorTest2 = async () => {
  const p = Promise.reject('no');
  try {
    await p;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * catch and throw and catch
 * @returns {Promise<void>}
 */
const catchErrorTest3 = async () => {
  const p = Promise.reject('no');
  try {
    try {
      await p;
    } catch (e) {
      console.error(e);
      throw e;
    }
  } catch (e) {
    console.error(e);
  }
};

/**
 *
 * @returns {Promise<void>}
 */
const promiseAllTest = async () => {
  try {
    const t = await Promise.all([Promise.reject('no'), Promise.resolve('yes')]);
    console.log(t);
  } catch (e) {
    console.error(e);
  }
};

/**
 *
 * @returns {Promise<void>}
 */
const promiseAllSettledTest = async () => {
  try {
    const t = await Promise.allSettled([Promise.reject('no'), Promise.resolve('yes')]);
    console.log(t);
  } catch (e) {
    console.error(e);
  }
};
