import React, { Component } from 'react';
import {
  Row,
  Collection,
  CollectionItem,
} from 'react-materialize';

export default class DishList extends Component {
  render() {
    const { dishes } = this.props;

    return (
      <Collection header="Dishes">
        {
          dishes.map(dishName => (
            <Row key={dishName}>
              <CollectionItem
                data-test='dishNameListItem'>
                {dishName}
              </CollectionItem>
            </Row>
          ))
        }
      </Collection>
    );
  }
}

