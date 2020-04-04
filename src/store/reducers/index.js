import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import dishes from './dishesReducer';

export default combineReducers({
  restaurants,
  dishes,
});
