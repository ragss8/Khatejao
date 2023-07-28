import { combineReducers } from 'redux';
import { ordersReducer, restaurantNameReducer } from './Reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  restaurantName: restaurantNameReducer,
});

export default rootReducer;
