import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import 'babel-polyfill';

import NewRestaurantForm from '../../src/NewRestaurantForm';

import { RESTAURANT_NAME } from '../constants/messages';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(async () => {
      saveHandler = jest.fn();

      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      await act(async () => {
        await wrapper
          .find('input[data-test="newRestaurantName"]')
          .simulate('change', {
            // you must add this next line as (Formik calls e.persist() internally)
            persist: () => { },
            target:
            {
              name: 'restaurantName',
              value: RESTAURANT_NAME,
            },
          });
      });

      await act(async () => {
        await wrapper.find('form')
          .simulate(
            'submit',
            { preventDefault: () => { } },
          );
      });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');
    });

    it('calls the onSave handler', () => {
      expect(saveHandler)
        .toHaveBeenCalledWith(RESTAURANT_NAME);
    });

    it('clears the input field', () => {
      expect(
        wrapper.find('input[data-test="newRestaurantName"]')
          .prop('value'),
      ).toEqual('');
    });
  });

  describe('no name and click save', () => {
    it('does not add restaurant to list', () => {
      const saveHandler = jest.fn();

      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler).not.toHaveBeenCalled();
    });
  });
});
