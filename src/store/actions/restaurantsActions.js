export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';

export const addRestaurant = (name) => {
  return {
    type: ADD_RESTAURANT,
    name,
  };
};

export const removeRestaurant = (name) => {
  return {
    type: REMOVE_RESTAURANT,
    name,
  };
};
