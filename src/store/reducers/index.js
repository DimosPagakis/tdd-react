import { combineReducers } from 'redux';
import restaurants from './restaurantsReducer';
import dishes from './dishesReducer';
import users from './usersReducer';

export default combineReducers({
  restaurants,
  dishes,
  users,
});
