import React from 'react';
import { mount } from 'enzyme';
import RestaurantList from '../../src/RestaurantList';

import { RESTAURANT_NAME } from '../constants/messages';

describe('Restaurant List', () => {
  describe('clicking the remove button', () => {
    it('calls the onRemoveHandler', () => {
      const onRemoveHandler = jest.fn();

      const wrapper = mount(<RestaurantList onRemove={onRemoveHandler} restaurants={[RESTAURANT_NAME]} />);

      wrapper.find('button[data-test="removeRestaurantButton"]').at(0).simulate('click');

      expect(onRemoveHandler).toHaveBeenCalledWith(RESTAURANT_NAME);
    });
  });
});
