import { useEffect, useRef, useState } from 'react';

const KEY = '__uaxl';

const isIgnored = (list, url) =>
  list.some((item) => (item instanceof RegExp ? item.test(url) : item === url));

export const useAxiosLoader = (axios, ignoredUrls = []) => {
  const [loading, setLoading] = useState(false);
  const activeRef = useRef(0);
  const ignoredRef = useRef(ignoredUrls);

  ignoredRef.current = ignoredUrls;

  useEffect(() => {
    activeRef.current = 0;
    setLoading(false);

    const stop = (config) => {
      if (!config || !config[KEY] || !activeRef.current) {
        return;
      }

      delete config[KEY];

      if (!--activeRef.current) {
        setLoading(false);
      }
    };

    const requestId = axios.interceptors.request.use(
      (config) => {
        if (!isIgnored(ignoredRef.current, config && config.url)) {
          config[KEY] = 1;

          if (!activeRef.current++) {
            setLoading(true);
          }
        }

        return config;
      },
      (error) => {
        stop(error && error.config);
        return Promise.reject(error);
      },
    );

    const responseId = axios.interceptors.response.use(
      (response) => {
        stop(response && response.config);
        return response;
      },
      (error) => {
        stop((error && error.config) || (error && error.response && error.response.config));
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(requestId);
      axios.interceptors.response.eject(responseId);
      activeRef.current = 0;
    };
  }, [axios]);

  return [loading];
};
