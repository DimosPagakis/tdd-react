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
import UserList from '../User/UserList';
import { addDish } from '../../store/actions/dishesActions';
import { loadUsers } from '../../store/actions/usersActions';

class RestaurantDetailPage extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  handleShowNewDishForm = () => {
    $('#addDishModal').modal('open');
  }

  handleAddDish = (dishName) => {
    $('#addDishModal').modal('close');

    const { restaurantName } = this.props.location.state;

    this.props.addDish(restaurantName, dishName);
  }

  render() {
    const { dishes, users } = this.props;
    const { restaurantName } = this.props.location.state;

    const restaurantDishes = dishes[restaurantName] || [];

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
          <DishList dishes={restaurantDishes} />
        </Row>
        <Row>
          <UserList users={users}></UserList>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes,
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadUsers,
  addDish,
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailPage);
