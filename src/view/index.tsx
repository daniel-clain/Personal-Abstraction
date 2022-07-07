
import { render } from 'react-dom'
import * as React from 'react';
import './style.sass'
import { RouterOutlet_P } from './partials/router.p';
import { Nav_P } from './partials/nav.p';
import { 
  BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { List_V } from './views/list.v';
import { Root_V } from './views/root.v';

const PersonalAbstraction_Index = () => <>
  <personal-abstraction>
    <Router>
      <nav>
        <Link to="/">Root</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/ideas">Ideas</Link>
        <Link to="/aspects">Aspects</Link>
      </nav>
      
      <Routes>
        
        <Route path={'/'} element={ 
          <Root_V />
        }></Route>

        <Route path={'/notes'} element={ 
          <List_V dataListKey={'notes'}/>
        }></Route>
        
        <Route path={'/ideas'} element={ 
          <List_V dataListKey={'ideas'}/>
        }></Route>

        <Route path={'/aspects'} element={ 
          <List_V dataListKey={'aspects'}/>
        }></Route>

      </Routes>
    </Router>
  </personal-abstraction>

</>

const reactRenderingTag = document.createElement('react')
document.body.appendChild(reactRenderingTag)
render(<PersonalAbstraction_Index />, reactRenderingTag)
