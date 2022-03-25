import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => setCounter(counter => counter + 1), [setCounter]);
  const decrementCounter = useCallback(() => setCounter(counter => counter - 1), [setCounter]);

  const interceptors = useMemo(
    () => ({
      request: (config) => {
        incrementCounter();
        return config;
      },
      response: (config) => {
        decrementCounter();
        return config;
      },
      error: (error) => {
        decrementCounter();
        return Promise.reject(error);
      }
    }),
    [incrementCounter, decrementCounter]
  );

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(interceptors.request, interceptors.error);
    const responseInterceptor = axios.interceptors.response.use(interceptors.response, interceptors.error);

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    }
  }, [interceptors])

  return [counter > 0];
}
