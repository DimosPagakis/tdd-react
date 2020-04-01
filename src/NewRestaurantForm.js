import React, { Component } from 'react';

// styling
import Material from 'materialize-css';
import {
  Button,
  TextInput,
  Row,
  Col,
} from 'react-materialize';

export default class NewRestaurantForm extends Component {
  state = { inputText: '' }

  handleTextChange = e => {
    this.setState({ inputText: e.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;

    if (inputText !== '') {
      const { onSave } = this.props;

      onSave(inputText);

      this.setState({ inputText: '' });
    }
  }

  render() {
    const { inputText } = this.state;

    return (
      <Row>
        <Col s={12} m={8}>
          <TextInput
            label="Restaurant name"
            onChange={this.handleTextChange}
            value={inputText}
            data-test="newRestaurantName"
          />
        </Col>
        <Col s={12} m={4}>
          <Button
            waves="light"
            data-test="saveNewRestaurantButton"
            onClick={this.handleSave}
          >Save
          </Button>
        </Col>
      </Row >
    );
  }
}
