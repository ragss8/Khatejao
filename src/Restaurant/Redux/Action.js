import axios from "axios";
export const FETCH_RESTAURANT_DETAILS_REQUEST = 'FETCH_RESTAURANT_DETAILS_REQUEST';
export const FETCH_RESTAURANT_DETAILS_SUCCESS = 'FETCH_RESTAURANT_DETAILS_SUCCESS';
export const FETCH_RESTAURANT_DETAILS_FAILURE = 'FETCH_RESTAURANT_DETAILS_FAILURE';

export const fetchRestaurantDetails = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_RESTAURANT_DETAILS_REQUEST });

      const response = await axios.get(`http://localhost:8000/restaurant/${email}`);
      const restaurantDetails = response.data;

      dispatch({
        type: FETCH_RESTAURANT_DETAILS_SUCCESS,
        payload: restaurantDetails,
      });
    } catch (error) {
      dispatch({ type: FETCH_RESTAURANT_DETAILS_FAILURE, payload: error.message });
    }
  };
};
