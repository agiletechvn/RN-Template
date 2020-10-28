// import { USER_ACTION_TYPES } from '../types';

const initState = {};

const auth = (state = initState, { type, payload }) => {
  switch (type) {
    // case USER_ACTION_TYPES.LOGIN_SUCCESS:
    //   return { ...state, token: payload };
    // case USER_ACTION_TYPES.DO_LOGOUT:
    //   return initState;
    default:
      return state;
  }
};

export default auth;
