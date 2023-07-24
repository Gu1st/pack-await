export default function packAwait<T>(
  promise: Promise<T>,
  errorObj?: Record<string, any>
): Promise<[unknown, unknown]> {
  return new Promise((resolve) => {
    promise
      .then((res) => {
        resolve([res, null]);
      })
      .catch((err) => {
        if (typeof err === "object") {
          resolve([null, Object.assign({}, err, errorObj)]);
        } else {
          resolve([null, err]);
        }
      });
  });
}
