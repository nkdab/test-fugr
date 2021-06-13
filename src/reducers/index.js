import {getPersonsReducer} from './getPersonsReducer'
import { combineReducers } from 'redux';

const reducer = () => {
  return combineReducers({ persons: getPersonsReducer})
}

export default reducer();