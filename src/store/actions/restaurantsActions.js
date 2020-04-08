export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';

export const addRestaurant = (name) => {
  const restaurant = {
    name,
  };

  return {
    type: ADD_RESTAURANT,
    restaurant,
  };
};

export const removeRestaurant = (name) => {
  return {
    type: REMOVE_RESTAURANT,
    name,
  };
};
