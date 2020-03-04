import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Navi from '../components/Navi/Navi'
import Dashboard from '../components/dashboard/Dashboard'
import NotFound from '../components/notFound/NotFound'
import CategoryAdd from '../components/category/CategoryAdd'

function App() {
  return (
  
            <div>
            <Container>
            <Container>
      <Navi>
      </Navi>
      <Switch>
        <Route path="/CategoryAdd" component={CategoryAdd}></Route>
        <Route path="/Home" component={Dashboard}></Route>
        <Route path="/" component={Dashboard}></Route>
        <Route component={NotFound}></Route>
        
      </Switch>
    </Container>
            </Container>
          </div>
        
  
  );
}

export default App;
