const namespace = 'USER';
export const SET_CURRENT_USER = `${namespace}::SET_CURRENT_USER`;

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
