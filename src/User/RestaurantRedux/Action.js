import axios from 'axios';

export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

export const fetchRestaurants = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_RESTAURANTS_REQUEST });

      const response = await axios.get('http://localhost:8002/restaurants'); 
      const restaurantList = response.data;

      dispatch({
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: restaurantList,
      });
    } catch (error) {
      dispatch({ type: FETCH_RESTAURANTS_FAILURE, payload: error.message });
    }
  };
};
