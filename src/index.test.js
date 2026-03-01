import { renderHook, act } from '@testing-library/react';
import { useAxiosLoader } from './index';

describe('useAxiosLoader', () => {
  let axiosMock;

  beforeEach(() => {
    axiosMock = {
      interceptors: {
        request: {
          use: jest.fn(),
          eject: jest.fn(),
        },
        response: {
          use: jest.fn(),
          eject: jest.fn(),
        },
      },
    };
  });

  it('should return false initially', () => {
    const { result } = renderHook(() => useAxiosLoader(axiosMock));
    expect(result.current[0]).toBe(false);
  });

  it('should return true when a request is in progress', () => {
    let requestInterceptor;
    axiosMock.interceptors.request.use.mockImplementation((req) => {
      requestInterceptor = req;
      return 'req-id';
    });

    const { result } = renderHook(() => useAxiosLoader(axiosMock));

    act(() => {
      requestInterceptor({ url: 'http://example.com' });
    });

    expect(result.current[0]).toBe(true);
  });

  it('should return false when request is finished', () => {
    let requestInterceptor;
    let responseInterceptor;
    axiosMock.interceptors.request.use.mockImplementation((req) => {
      requestInterceptor = req;
      return 'req-id';
    });
    axiosMock.interceptors.response.use.mockImplementation((res) => {
      responseInterceptor = res;
      return 'res-id';
    });

    const { result } = renderHook(() => useAxiosLoader(axiosMock));

    act(() => {
      requestInterceptor({ url: 'http://example.com' });
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      responseInterceptor({ data: 'ok' });
    });
    expect(result.current[0]).toBe(false);
  });

  it('should ignore urls matching ignoredUrls regex', () => {
    let requestInterceptor;
    axiosMock.interceptors.request.use.mockImplementation((req) => {
      requestInterceptor = req;
      return 'req-id';
    });

    const ignoredUrls = [/ignore-me/];
    const { result } = renderHook(() => useAxiosLoader(axiosMock, ignoredUrls));

    act(() => {
      requestInterceptor({ url: 'http://example.com/ignore-me' });
    });

    expect(result.current[0]).toBe(false);
  });

  it('should ignore urls matching ignoredUrls strings', () => {
    let requestInterceptor;
    axiosMock.interceptors.request.use.mockImplementation((req) => {
      requestInterceptor = req;
      return 'req-id';
    });

    const ignoredUrls = ['http://example.com/ignore-me'];
    const { result } = renderHook(() => useAxiosLoader(axiosMock, ignoredUrls));

    act(() => {
      requestInterceptor({ url: 'http://example.com/ignore-me' });
    });

    expect(result.current[0]).toBe(false);
  });

  it('should eject interceptors on unmount', () => {
    const reqId = 'req-id';
    const resId = 'res-id';
    axiosMock.interceptors.request.use.mockReturnValue(reqId);
    axiosMock.interceptors.response.use.mockReturnValue(resId);

    const { unmount } = renderHook(() => useAxiosLoader(axiosMock));

    unmount();

    expect(axiosMock.interceptors.request.eject).toHaveBeenCalledWith(reqId);
    expect(axiosMock.interceptors.response.eject).toHaveBeenCalledWith(resId);
  });
});
