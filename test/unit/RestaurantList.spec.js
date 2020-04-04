import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import RestaurantList from '../../src/RestaurantList';

import { RESTAURANT_NAME } from '../../constants/messages';

describe('Restaurant List', () => {
  describe('clicking the remove button', () => {
    it('calls the onRemoveHandler', () => {
      const onRemoveHandler = jest.fn();

      const wrapper = mount(
        <Router>
          <RestaurantList onRemove={onRemoveHandler} restaurants={[RESTAURANT_NAME]} />
        </Router>);

      wrapper.find('button[data-test="removeRestaurantButton"]').at(0).simulate('click');

      expect(onRemoveHandler).toHaveBeenCalledWith(RESTAURANT_NAME);
    });
  });
});
