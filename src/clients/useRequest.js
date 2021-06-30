import { useState } from 'react';

function useRequest() {
  const [response, setResponse] = useState(null);

  const handleFetchPromise = (fetchPromise) => {
    fetchPromise
      .then((res) => {
        if (res.status === 403) {
          throw new Error('Youtube API limit has exceeded');
        } else {
          return res.json();
        }
      })
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return { result: { response }, handleFetchPromise };
}

export default useRequest;
