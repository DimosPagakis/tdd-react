import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';


// Styling
import {
  Button,
  Row,
  Col,
  Modal,
} from 'react-materialize';

export default class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
  };

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      restaurantNames: [
        newRestaurantName,
        ...state.restaurantNames,
      ],
    }));

    $('#addRestaurantModal').modal('close');
  }

  handleShowNewRestaurantForm = () => {
    $('#addRestaurantModal').modal('open');
  }

  handleRemoveRestaurant = (restaurantName) => {
    this.setState({ restaurantNames: this.state.restaurantNames.filter(restaurant => restaurant !== restaurantName) });
  }

  render() {
    const { restaurantNames } = this.state;

    return (
      <div>
        <Row>
          <Col s={12}>
            <AddNewRestaurantModal></AddNewRestaurantModal>

          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Button
              flat
              node="button"
              waves="light"
              data-test="addRestaurantButton"
              onClick={this.handleShowNewRestaurantForm}>Add Restaurant
            </Button>

            <Modal
              id='addRestaurantModal'
            >
              <NewRestaurantForm onSave={this.handleAddRestaurant} />

            </Modal>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <RestaurantList restaurants={restaurantNames} onRemove={this.handleRemoveRestaurant} /></Col>
        </Row>
      </div>
    );
  }
}

const AddNewRestaurantModal = () => (
  <div>
    <h5>Look at me. I'm Mr.Meeseeks. I'm learning React</h5>
  </div>
);
