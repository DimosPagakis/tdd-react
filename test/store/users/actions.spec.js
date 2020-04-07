import {
  loadUsers,
  STORE_USERS,
} from '../../../src/store/actions/usersActions';

import api from '../../../src/store/api';
jest.mock('../../../src/store/api');

describe('users actions', () => {
  describe('loadUsers', () => {
    it('store users retrieved from the API', () => {
      const users = [
        {
          id: 1,
          name: "John Doe",
          username: "John Doe",
        },
        {
          id: 2,
          name: "Joana Doe",
          username: "Joana",
        },
      ];

      const dispatch = jest.fn();

      api.get.mockResolvedValue({
        data: users,
      });

      return loadUsers()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith({
            type: STORE_USERS,
            users,
          });
        });
    });
  });
});
