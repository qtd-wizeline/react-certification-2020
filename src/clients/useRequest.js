import { useState } from 'react';

function parseJSON(response) {
  return new Promise((resolve) =>
    response.json().then((json) =>
      resolve({
        status: response.status,
        ok: response.ok,
        json,
      })
    )
  );
}

function useRequest() {
  const [response, setResponse] = useState(null);

  const handleFetchPromise = (fetchPromise) => {
    const handledPromise = new Promise((resolve, reject) => {
      fetchPromise.then(parseJSON).then((res) => {
        if (res.ok) {
          return resolve(res.json);
        }
        return reject(res.json.message);
      });
    });

    handledPromise
      .then((res) => {
        setResponse(res);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  };

  return { result: { response }, handleFetchPromise };
}

export default useRequest;
