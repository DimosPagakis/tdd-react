import React, { Component } from 'react';
import { Formik } from 'formik';

// styling
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

  render() {
    return (
      <Row>
        <Formik
          initialValues={{ restaurantName: '' }}
          onSubmit={this.handleSave}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                s={12} m={8}
                label="Restaurant name"
                name="restaurantName"
                value={values.restaurantName}
                onChange={handleChange}
                data-test="newRestaurantName"
              />
              <Button
                s={12} m={4}
                waves="light"
                data-test="saveNewRestaurantButton"
              >Save
              </Button>
            </form>
          )}
        </Formik>
      </Row >
    );
  }
}
