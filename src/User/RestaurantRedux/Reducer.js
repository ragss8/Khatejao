import {
    FETCH_RESTAURANTS_REQUEST,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE,
  } from '../RestaurantRedux/Action';
  
  const initialState = {
    restaurants: [],
    loading: false,
    error: null,
  };
  
  const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RESTAURANTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_RESTAURANTS_SUCCESS:
        return { ...state, restaurants: action.payload, loading: false, error: null };
      case FETCH_RESTAURANTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default restaurantReducer;
  