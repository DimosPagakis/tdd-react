import React from 'react';
import RestaurantListPage from './RestaurantListPage';

import { Row, Col } from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (<Row>
      <Col s={2}></Col>
      <Col s={8}><RestaurantListPage /></Col>
      <Col s={2}></Col>
    </Row>);
  }
}
