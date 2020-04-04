import React, { Component } from 'react';
import { connect } from 'react-redux';
// Styling
import {
  Button,
  Row,
  Col,
  Modal,
} from 'react-materialize';

import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';
import {
  addRestaurant,
  removeRestaurant,
} from '../store/actions/restaurantsActions';

class RestaurantListPage extends Component {
  handleAddRestaurant = (newRestaurantName) => {
    this.props.addRestaurant(newRestaurantName);

    $('#addRestaurantModal').modal('close');
  }

  handleShowNewRestaurantForm = () => {
    $('#addRestaurantModal').modal('open');
  }

  handleRemoveRestaurant = (restaurantName) => {
    this.props.removeRestaurant(restaurantName);
  }

  render() {
    const { restaurants } = this.props;

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
              node="button"
              waves="light"
              data-test="addRestaurantButton"
              onClick={this.handleShowNewRestaurantForm}>Add Restaurant
            </Button>

            <Modal
              id='addRestaurantModal'
              data-test='addRestaurantModal'
            >
              <NewRestaurantForm onSave={this.handleAddRestaurant} />

            </Modal>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <RestaurantList restaurants={restaurants} onRemove={this.handleRemoveRestaurant} /></Col>
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

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

const mapDispatchToProps = {
  addRestaurant,
  removeRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListPage);
