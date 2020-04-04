import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
} from 'react-materialize';

import NewDishForm from '../Dish/NewDishForm';
import DishList from '../Dish/DishList';

export default class RestaurantDetailPage extends Component {
  state = {
    dishNames: [],
  }
  handleShowNewDishForm = () => {
    $('#addDishModal').modal('open');
  }

  handleAddDish = (dishName) => {
    $('#addDishModal').modal('close');

    this.setState(state => ({
      dishNames: [
        dishName,
        ...state.dishNames,
      ],
    }));
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button
              s={12}
              data-test="backButton"
              onClick={() => this.props.history.goBack()}>Back</Button>
          </Col>
        </Row>
        <Row>
          <Col >
            <Button s={12} m={2}
              data-test="addNewDishButton"
              onClick={this.handleShowNewDishForm}>Add dish</Button>
          </Col>
        </Row>
        <Row>
          <Modal
            id='addDishModal'
            data-test='addDishModal'
          >
            <NewDishForm onSave={this.handleAddDish} />
          </Modal>
        </Row>
        <Row>
          <DishList dishNames={this.state.dishNames} />
        </Row>
      </div>
    );
  }
}
