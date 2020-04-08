import React, { Component } from 'react';
import {
  Row,
  Collection,
  CollectionItem,
} from 'react-materialize';

export default class UserList extends Component {
  render() {
    const { users } = this.props;

    return (
      <Collection header="Guests who have visited" data-test="dishesList">
        {
          users.map(user => (
            <Row key={user.id}>
              <CollectionItem
                data-test='userNameListItem'>
                {user.name}
              </CollectionItem>
            </Row>
          ))
        }
      </Collection>
    );
  }
}

