import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Assuming you will create this file

const rootReducer = combineReducers({
  cart: cartReducer,
  // You can add more reducers here as needed
});

const store = createStore(rootReducer);

export default store;
