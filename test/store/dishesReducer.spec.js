import { RESTAURANT_NAME, DISH_NAME, DISH_NAME_ALT } from '../../constants/messages';
import dishes from '../../src/store/reducers/dishesReducer';
import { ADD_DISH } from '../../src/store/actions/dishesActions';

describe('ADD_DISH', () => {
  it('adds a dish for the specified restaurant', () => {
    const state = [];

    const restaurantName = RESTAURANT_NAME;
    const dishName = DISH_NAME;

    dishes(state, {
      type: ADD_DISH,
      restaurantName,
      dishName,
    });

    dishes(state, {
      type: ADD_DISH,
      restaurantName,
      dishName: DISH_NAME_ALT,
    });

    expect(state[restaurantName]).toEqual([DISH_NAME_ALT, dishName]);
  });
});
