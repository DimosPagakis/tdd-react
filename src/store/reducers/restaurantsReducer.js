import { ADD_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurantsActions';
const initialState = [];

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESTAURANT:
      return [action.name, ...state];
    case REMOVE_RESTAURANT:
      return state.filter(restaurant => restaurant !== action.name);
    default:
      return state;
  }
}
