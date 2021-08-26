import './App.css';
import League from './components/League';
import {BrowserRouter, Switch, Link, Route} from "react-router-dom";
import Games from './components/Games';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar expand="xxl" bg="light">
            <Navbar.Toggle/>
            <Navbar.Collapse className="nav-collapse">
            <Nav>
              <Nav.Link href = "/mlb-standings"> Standings </Nav.Link>
              <Nav.Link href = "/games"> Regular Season Final Scores </Nav.Link>
              </Nav></Navbar.Collapse>
            
          </Navbar>
        <Switch>
          <Route exact path = "/mlb-standings">
            <League />
          </Route>
          <Route exact path = "/games">
            <Games />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
