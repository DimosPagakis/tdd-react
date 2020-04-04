import { ADD_DISH } from '../actions/dishesActions';
const initialState = [];

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DISH:
      return [action.name, ...state];
    default:
      return state;
  }
}
