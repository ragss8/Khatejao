import axios from 'axios';

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';
<<<<<<< HEAD
export const SET_RESTAURANT_NAME = 'SET_RESTAURANT_NAME';
=======

>>>>>>> a3dc7cf (update)

export const fetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

export const fetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchOrdersFailure = (error) => ({
  type: FETCH_ORDERS_FAILURE,
  payload: error,
});

<<<<<<< HEAD
export const setRestaurantName = (restaurantName) => ({
  type: SET_RESTAURANT_NAME,
  payload: restaurantName,
});

=======
>>>>>>> a3dc7cf (update)
export const fetchOrdersByRestaurant = (restaurantName) => {
  return async (dispatch) => {
    dispatch(fetchOrdersRequest());

    try {
      const response = await axios.get(`http://localhost:8002/orders/${restaurantName}`);
      const orders = response.data;
      dispatch(fetchOrdersSuccess(orders));
    } catch (error) {
      dispatch(fetchOrdersFailure('Error fetching orders'));
    }
  };
};
