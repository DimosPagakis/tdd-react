import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import 'babel-polyfill';

import NewDishForm from '../../src/NewDishForm';

import { DISH_NAME } from '../../constants/messages';

describe('NewDishForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(async () => {
      saveHandler = jest.fn();

      wrapper = mount(<NewDishForm onSave={saveHandler} />);

      await act(async () => {
        await wrapper
          .find('input[data-test="newDishName"]')
          .simulate('change', {
            // you must add this next line as (Formik calls e.persist() internally)
            persist: () => { },
            target:
            {
              name: 'dishName',
              value: DISH_NAME,
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
        .find('button[data-test="saveNewDishButton"]')
        .simulate('click');
    });

    it('calls the onSave handler', () => {
      expect(saveHandler)
        .toHaveBeenCalledWith(DISH_NAME);
    });

    it('clears the input field', () => {
      expect(
        wrapper.find('input[data-test="newDishName"]')
          .prop('value'),
      ).toEqual('');
    });
  });

  describe('no name and click save', () => {
    it('does not add dish to list', () => {
      const saveHandler = jest.fn();

      const wrapper = mount(<NewDishForm onSave={saveHandler} />);

      wrapper
        .find('button[data-test="saveNewDishButton"]')
        .simulate('click');

      expect(saveHandler).not.toHaveBeenCalled();
    });
  });
});
