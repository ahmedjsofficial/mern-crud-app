import React from 'react';
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={CreateStudent} />
        <Route path="/CreateStudent" component={CreateStudent} />
        <Route path="/EditStudent/:id" component={EditStudent} />
        <Route path="/StudentList" component={StudentList} />
      </Switch>
    </>
  )
}

export default App;
