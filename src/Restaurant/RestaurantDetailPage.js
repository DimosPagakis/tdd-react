import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Row,
  Col,
  Button,
  Modal,
} from 'react-materialize';

import NewDishForm from '../Dish/NewDishForm';
import DishList from '../Dish/DishList';
import { addDish } from '../store/actions/dishesActions';

class RestaurantDetailPage extends Component {

  handleShowNewDishForm = () => {
    $('#addDishModal').modal('open');
  }

  handleAddDish = (dishName) => {
    $('#addDishModal').modal('close');

    this.props.addDish(dishName);
  }

  render() {
    const { dishes } = this.props;
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
          <DishList dishes={dishes} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes,
  };
}

const mapDispatchToProps = {
  addDish,
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailPage);
