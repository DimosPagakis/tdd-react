import React, { Component } from 'react';
import { Formik } from 'formik';

// styling
import '../../styles/forms.scss';
import Material from 'materialize-css';
import {
  Button,
  TextInput,
  Row,
} from 'react-materialize';

export default class NewRestaurantForm extends Component {
  handleSave = (values, { resetForm }) => {
    const { dishName } = values;

    if (dishName !== '') {
      const { onSave } = this.props;

      onSave(dishName);
      resetForm();
    }
  }

  validate = (values) => {
    const errors = {};

    if (values.dishName === '') {
      errors.dishName = 'Cannot be blank';
    }

    return errors;
  }

  renderForm = ({ values, errors, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <TextInput
          s={12} m={8}
          label="Dish name"
          name="dishName"
          value={values.dishName}
          error={errors.dishName}
          onChange={handleChange}
          data-test="newDishName"
        />
        <Button
          s={12} m={4}
          type="submit"
          waves="light"
          data-test="saveNewDishButton"
        >Save
        </Button>
      </Row>
      <Row>
        <p
          s={12}
          data-test="newRestaurantNameError"
          className="error"
        >{errors.dishName}
        </p>
      </Row>
    </form>
  );

  render() {
    return (
      <Row>
        <Formik
          initialValues={{ dishName: '' }}
          validate={this.validate}
          onSubmit={this.handleSave}
        >
          {this.renderForm}
        </Formik>
      </Row >
    );
  }
}
