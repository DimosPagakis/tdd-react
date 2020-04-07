import api from '../api';

export const STORE_USERS = 'STORE_USERS';

export const loadUsers = () => (dispatch) => {
  return api.get('/users')
    .then(res => {
      const users = res.data;

      dispatch({
        type: STORE_USERS,
        users,
      });
    });
};
