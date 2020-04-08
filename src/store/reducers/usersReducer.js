import { STORE_USERS } from '../actions/usersActions';
const initialState = [];

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_USERS:
      return action.users;
    default:
      return state;
  }
}
