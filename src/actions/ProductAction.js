import {GET_PRODUCTS} from './types';

// Get product action
export const getProduct = () => async dispatch => {
  return dispatch({type: GET_PRODUCTS, payload: response?.data?.docs});
};
