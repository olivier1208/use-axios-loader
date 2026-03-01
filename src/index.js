import { useCallback, useEffect, useMemo, useState } from "react";

export const useAxiosLoader = (axios , ignoredUrls = []) => {
    const [counter, setCounter] = useState(0);
    const inc = useCallback(() => setCounter(c => c + 1), []);
    const dec = useCallback(() => setCounter(c => Math.max(0, c - 1)), []);

    const urlIsIgnored = url => {
        return ignoredUrls.some(ignoredUrl => {
            if (ignoredUrl instanceof RegExp) {
                return ignoredUrl.test(url);
            }
            return url === ignoredUrl;
        });
    }

    const interceptors = useMemo(() => ({
        request: config => (!urlIsIgnored(config.url) && inc(), config),
        response: response => (dec(), response),
        error: error => (dec(), Promise.reject(error)),
    }), [inc, dec, ignoredUrls]); // added ignoredUrls to dependencies

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
    }, [axios, interceptors]); // added axios to dependencies

    return [counter > 0]
};
