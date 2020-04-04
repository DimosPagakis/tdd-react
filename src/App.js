import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Row, Col } from 'react-materialize';

import RestaurantListPage from './Components/Restaurant/RestaurantListPage';
import RestaurantDetailPage from './Components/Restaurant/RestaurantDetailPage';

import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Row>
            <Col s={12} m={10} l={8} offset="l2 m1">
              <Route path='/' exact component={RestaurantListPage} />
              <Route path='/restaurants/:name' component={RestaurantDetailPage} />
            </Col>
          </Row>
        </Router>
      </Provider>
    );
  }
}
