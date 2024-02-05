import { configureStore } from '@reduxjs/toolkit';
import habitReducer from './reducers'; // importing habitReducer

// creating store
const store = configureStore({
  reducer:{ habitReducer } 
});

export default store;
