import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Navi from '../components/Navi/Navi'
import Dashboard from '../components/dashboard/Dashboard'
import NotFound from '../components/notFound/NotFound'
import CategorySettings from '../components/category/CategorySettings'

function App() {
  return (
  
            <div>
           
            <Container>
      <Navi>
      </Navi>
      <Switch>
        <Route path="/CategorySettings" component={CategorySettings}></Route>
        <Route path="/Home" component={Dashboard}></Route>
        <Route path="/" component={Dashboard}></Route>
        <Route component={NotFound}></Route>
        
      </Switch>
    </Container>
       
          </div>
        
  
  );
}

export default App;
