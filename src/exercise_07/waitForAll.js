export default function waitForAll(...promises) {
  promises.forEach((promise) => {
    if (!(promise instanceof Promise)) {
      throw Error('Not all elements are promises.');
    }
  });

  return new Promise((resolve, reject) => {
    let counter = 0;
    for (let i = 0; i < promises.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      promises[i].then(() => {
        counter += 1;
        if (counter === promises.length) {
          resolve();
        }
      },
      // eslint-disable-next-line no-loop-func
      () => {
        'It should not be a success promise';
      // eslint-disable-next-line no-loop-func
      }).finally(() => {
        if (i === promises.length - 1 && counter !== promises.length) {
          reject();
        }
      });
    }
  });
}
