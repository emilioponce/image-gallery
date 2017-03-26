
const axios = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => resolve({})
      );
    });
  }
}

export default axios;
