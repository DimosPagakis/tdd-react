import { ADD_DISH } from '../actions/dishesActions';
const initialState = {};

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DISH:
      const { restaurantName, dishName } = action;
      const existingDishes = state[restaurantName] || [];

      return state[restaurantName] = [
        dishName,
        ...existingDishes,
      ];
    default:
      return state;
  }
}
