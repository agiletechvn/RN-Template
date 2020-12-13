import { BE, PATHS } from '@src/apis/BE';

export const getUsers = (reqParams) => {
  const params = {
    page: 1,
    per_page: 10,
  };

  if (reqParams?.current) {
    params.page = reqParams.current + 1;
  }

  if (reqParams?.email) {
    params.email = reqParams.email;
  }

  return BE.get(PATHS.USER_LIST, {
    params: params,
  }).then((response) => ({
    list: response.data,
    total: response.total,
    current: params.page,
  }));
};
