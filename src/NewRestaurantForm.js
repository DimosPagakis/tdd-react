import React, { Component } from 'react';
import { Formik } from 'formik';

// styling
import './forms.scss';
import Material from 'materialize-css';
import {
  Button,
  TextInput,
  Row,
} from 'react-materialize';

export default class NewRestaurantForm extends Component {
  handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;

    if (restaurantName !== '') {
      const { onSave } = this.props;

      onSave(restaurantName);
      resetForm();
    }
  }

  validate = (values) => {
    const errors = {};

    if (values.restaurantName === '') {
      errors.restaurantName = 'Cannot be blank';
    }

    return errors;
  }

  render() {
    return (
      <Row>
        <Formik
          initialValues={{ restaurantName: '' }}
          validate={this.validate}
          onSubmit={this.handleSave}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <TextInput
                  s={12} m={8}
                  label="Restaurant name"
                  name="restaurantName"
                  value={values.restaurantName}
                  error={errors.restaurantName}
                  onChange={handleChange}
                  data-test="newRestaurantName"
                />
                <Button
                  s={12} m={4}
                  type="submit"
                  waves="light"
                  data-test="saveNewRestaurantButton"
                >Save
                </Button>
              </Row>
              <Row>
                <p
                  s={12}
                  data-test="newRestaurantNameError"
                  className="error"
                >{errors.restaurantName}
                </p>
              </Row>
            </form>
          )}
        </Formik>
      </Row >
    );
  }
}
