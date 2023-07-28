import { combineReducers } from 'redux';
<<<<<<< HEAD
import { ordersReducer, restaurantNameReducer } from './Reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  restaurantName: restaurantNameReducer,
=======
import ordersReducer from './Reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
>>>>>>> a3dc7cf (update)
});

export default rootReducer;
