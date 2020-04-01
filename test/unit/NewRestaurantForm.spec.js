import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

import { RESTAURANT_NAME } from '../constants/messages';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
      saveHandler = jest.fn();

      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('input[data-test="newRestaurantName"]')
        .simulate('change', { target: { value: RESTAURANT_NAME } });

      wrapper.update();

      wrapper.find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');
    });

    it('clears the input field', () => {
      expect(
        wrapper
          .find('input[data-test="newRestaurantName"]')
          .prop('value'),
      ).toEqual('');
    });

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith(RESTAURANT_NAME);
    });
  });
});
