import { GET_DATA_START, GET_DATA_SUCCESS } from '../constants';

export const getDataStart = () => {
  return { type: GET_DATA_START };
};

export const getDataSuccess = (payload) => {
  return {type: GET_DATA_SUCCESS, payload}
}

