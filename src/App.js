import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home';
import Aboutus from './component/aboutus';
import Project from './component/project';
import Contactus from './component/contactus';
import Gallery from './component/gallery';
import { Route, Switch } from 'react-router-dom';
import Services from './component/services';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutus' component={Aboutus} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/contactus' component={Contactus} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/services' component={Services} />
        <Home />
      </Switch>
    </>
  )
}

