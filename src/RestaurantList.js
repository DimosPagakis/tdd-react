import React, { Component } from 'react';

// styling

import {
  Button,
  Collection,
  CollectionItem,
  Row,
  Col,
} from 'react-materialize';

export default class RestaurantList extends Component {
  handleOnClick = restaurantName => {
    const { onRemove } = this.props;

    onRemove(restaurantName);
  }

  render() {
    const { restaurants } = this.props;

    return (
      <Collection header="Restaurants">
        {
          restaurants.map(restaurantName => (
            <Row>
              <Col s={12} m={8}>
                < CollectionItem key={restaurantName} data-test='restaurantNameListItem' > {restaurantName}
                </CollectionItem></Col>
              <Col s={12} m={4}>
                <Button
                  data-test='removeRestaurantButton'
                  onClick={() => this.handleOnClick(restaurantName)}>Remove</Button>
              </Col>
            </Row>
          ),
          )
        }
      </Collection >
    );
  }
}

