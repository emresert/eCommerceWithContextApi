import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Navi from '../components/Navi/Navi'
import Dashboard from '../components/dashboard/Dashboard'
import NotFound from '../components/notFound/NotFound'

function App() {
  return (
  
            <div>
            <Container>
              <Navi></Navi>
              <Row>
                 <Col>
                  <Switch>
                    <Route exact path="/" component={Dashboard}>
                    </Route>
                    <Route component={NotFound}></Route>
                  </Switch>
                </Col>
              </Row>
            </Container>
          </div>
        
  
  );
}

export default App;
