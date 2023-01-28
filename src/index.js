import { useCallback, useEffect, useMemo, useState } from "react";

export const useAxiosLoader = (ignoredUrls = []) => {
    const [counter, setCounter] = useState(0);
    const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]);
    const dec = useCallback(() => setCounter(counter => counter - 1), [setCounter]);

    const urlIsIgnored = url => {
        return ignoredUrls.some(ignoredUrl => ignoredUrl.test(url));
    }

    const interceptors = useMemo(() => ({
        request: config => (!urlIsIgnored(config.url) && inc(), config),
        response: response => ((counter >= 0 && dec()), response), // Decrement ONLY if counter has been incremented (avoid minus values)
        error: error => ((counter >= 0 && dec()), Promise.reject(error)),
    }), [inc, dec]); // create the interceptors

    useEffect(() => {
        // add request interceptors
        const reqInterceptor = axios.interceptors.request.use(interceptors.request, interceptors.error);
        // add response interceptors
        const resInterceptor = axios.interceptors.response.use(interceptors.response, interceptors.error);
        return () => {
            // remove all intercepts when done
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        };
    }, [interceptors]);

    counter < 0  && setCounter(0)
    return [counter > 0]
};