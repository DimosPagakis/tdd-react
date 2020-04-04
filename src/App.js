import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import RestaurantListPage from './Restaurant/RestaurantListPage';
import RestaurantDetailPage from './Restaurant/RestaurantDetailPage';

import { Row, Col } from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Row>
          <Col s={12} m={10} l={8} offset="l2 m1">
            <Route path='/' exact component={RestaurantListPage} />
            <Route path='/restaurants/:name' component={RestaurantDetailPage} />
          </Col>
        </Row>
      </Router>
    );
  }
}
