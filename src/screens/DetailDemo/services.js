import { BE, PATHS } from '@src/apis/BE';

export const getUserDetail = ({ id }) => BE.get(PATHS.USER_DETAIL({ id }));
