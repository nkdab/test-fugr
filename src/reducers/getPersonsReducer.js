import { GET_DATA_START, GET_DATA_FAIL, GET_DATA_SUCCESS } from '../constants';

const initialState = {
  isLoading: true,
  hasError: false,
  persons: null,
};

export const getPersonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return { ...state, isLoading: true };
    case GET_DATA_FAIL:
      return { ...state, hasError: true, isLoading: false };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        persons: action.payload,
      };
    default:
      return state;
  }
};
