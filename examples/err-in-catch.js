/**
 *
 * @returns {Promise<void>}
 */
const errInCatch = async () => {
  try {
    await Promise.reject('error!');
  } catch (e) {
    await Promise.reject('i tried to report on the error');
    throw e;
  }
};

/**
 *
 * @returns {Promise<void>}
 */
const outer = async () => {
  try {
    await errInCatch();
  } catch (e) {
    console.error(e);
  }
}

outer();
