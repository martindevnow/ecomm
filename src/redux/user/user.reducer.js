import * as UserAction from './user.actions';

const initialState = {
  currentUser: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UserAction.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };

    default:
      return state;
  }
};
