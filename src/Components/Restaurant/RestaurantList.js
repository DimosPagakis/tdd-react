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
          restaurants.map(restaurantName => (
            <Row key={restaurantName}>
              <Col s={12} m={8}>
                <CollectionItem
                  data-test='restaurantNameListItem'>
                  <Link to={{
                    pathname: `restaurants/${restaurantName}`,
                    state: {
                      restaurantName,
                    },
                  }}>
                    {restaurantName}
                  </Link>
                </CollectionItem>
              </Col>
              <Col s={12} m={4}>
                <Button
                  data-test='removeRestaurantButton'
                  onClick={() => this.handleOnClick(restaurantName)}>
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

