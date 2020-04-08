import React, { Component } from 'react';
// styling
import {
  Button,
  Collection,
  CollectionItem,
  Row,
  Col,
} from 'react-materialize';
import { Link } from 'react-router-dom';

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
          restaurants.map(restaurant => (
            <Row key={restaurant.name}>
              <Col s={12} m={8}>
                <CollectionItem
                  data-test='restaurantNameListItem'>
                  <Link to={{
                    pathname: `restaurants/${restaurant.name}`,
                    state: {
                      restaurant: restaurant.name,
                    },
                  }}>
                    {restaurant.name}
                  </Link>
                </CollectionItem>
              </Col>
              <Col s={12} m={4}>
                <Button
                  data-test='removeRestaurantButton'
                  onClick={() => this.handleOnClick(restaurant.name)}>
                  Remove
                </Button>
              </Col>
            </Row>
          ),
          )
        }
      </Collection >
    );
  }
}

