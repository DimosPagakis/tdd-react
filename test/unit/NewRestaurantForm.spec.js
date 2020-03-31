import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

import { RESTAURANT_NAME } from '../constants/messages';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    it('calls the onSave handler', () => {
      // assert that a function was called
      const saveHandler = jest.fn();

      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper.find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: RESTAURANT_NAME } });

      wrapper.find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith(RESTAURANT_NAME);
    });
  });
});
