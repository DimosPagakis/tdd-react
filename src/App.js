import React, { Component } from 'react';
import RestaurantListPage from './RestaurantListPage';

import Sheep from './SheepComponents/Home';
import Kor from './Korponents/Home';
import Bench from './BenchComponents/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { Row, Col } from 'react-materialize';

export default class App extends Component {
  render() {
    return (<div id="App">
      <Router>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Row>
            <Col md={2} sm={2} xs={2}>
              <Navbar.Brand>TDD</Navbar.Brand>
            </Col>

            <Col md={6} sm={4} xs={2}></Col>

            <Col md={4} sm={6} xs={8}>
              <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/haris">Korponents</Link>
                <Link to="/bench">BenchComponents</Link>
                <Link to="/sheep">SheepComponents</Link>
              </Nav>
            </Col>
          </Row>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <RestaurantListPage />
          </Route>
          <Route path="/haris">
            <Kor />
          </Route>
          <Route path="/bench">
            <Bench />
          </Route>
          <Route path="/sheep">
            <Sheep />
          </Route>
        </Switch>
      </Router>
    </div>);
  }
}
