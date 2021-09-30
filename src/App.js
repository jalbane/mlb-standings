import './App.css';
import League from './components/League';
import {HashRouter, Switch, Link, Route} from "react-router-dom";
import Games from './components/Games';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <HashRouter basename ="/">
          <Navbar expand="xxl" bg="light">
            <Navbar.Toggle/>
            <Navbar.Collapse className="nav-collapse">
            <Nav>
              <Nav.Link as = {Link} to = "/"> Standings </Nav.Link>
              <Nav.Link as = {Link} to = "/games"> Final Scores </Nav.Link>
              </Nav></Navbar.Collapse>
            
          </Navbar>
        <Switch>
          <Route exact path = "/">
            <League />
          </Route>
          <Route path = "/games">
            <Games />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
