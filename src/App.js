import React from 'react';
import RestaurantListPage from './RestaurantListPage';

import { Home as Sheep } from './SheepComponents/Home';
import { Home as Kor } from './Korponents/Home';
import { Home as Bench } from './BenchComponents/Home';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { Row, Col } from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (<div id="App">
      <Router>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container fluid="true">
            <Row>
              <Col md={2} sm={2} xs={2}>
                <Navbar.Brand>TDD</Navbar.Brand>
              </Col>

              <Col md={6} sm={4} xs={2}></Col>

              <Col md={4} sm={6} xs={8}>
                <Nav className="mr-auto">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/haris">Korponents</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/bench">BenchComponents</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/sheep">SheepComponents</Link>
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
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
