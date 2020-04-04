import { ADD_DISH } from '../actions/dishesActions';
const initialState = {};

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DISH:
      const { restaurantName, dishName } = action;
      const newDishes = [
        dishName,
        ...(state[restaurantName] || []),
      ];

      state = {
        ...state,
        [restaurantName]: newDishes,
      };

      return state;
    default:
      return state;
  }
}
