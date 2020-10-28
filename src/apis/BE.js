import { extend } from 'umi-request';
import TokenManagement from '@src/utils/TokenManagement';
import ElsewhereStore from '@src/store';

export const BE = extend({
  prefix: 'http://localhost:3000',
});

BE.interceptors.response.use(
  async (response) => {
    const data = await response.clone().json();
    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error(data);

      return response;
    }

    return response;
  },
  { global: false },
);

export const injectBearer = (token, configs) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  if (configs.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {
    ...configs,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const TokenManager = new TokenManagement({
  isTokenValid: () => {
    return true;
  },
  getAccessToken: () => {
    return ElsewhereStore?.store?.getState()?.user?.token;
  },
});

export const privateRequest = async (request, url, configs) => {
  const token = await TokenManager.getToken();
  return request(url, injectBearer(token, configs));
};
