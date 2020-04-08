import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import RestaurantList from '../../src/Components/Restaurant/RestaurantList';

import { RESTAURANT_NAME } from '../../constants/messages';

describe('Restaurant List', () => {
  describe('clicking the remove button', () => {
    it('calls the onRemoveHandler', () => {
      const onRemoveHandler = jest.fn();

      const restaurants = [
        {
          name: RESTAURANT_NAME,
        },
      ];

      const wrapper = mount(
        <Router>
          <RestaurantList onRemove={onRemoveHandler} restaurants={restaurants} />
        </Router>);

      wrapper.find('button[data-test="removeRestaurantButton"]').at(0).simulate('click');

      expect(onRemoveHandler).toHaveBeenCalledWith(RESTAURANT_NAME);
    });
  });
});
