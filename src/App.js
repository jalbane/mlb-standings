import './App.css';
import Main from './containers/Main';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import GamesContainer from './containers/GamesContainer.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import App2 from './App2';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/RootReducer.js';
import QueryYearContext from './contexts/queryYearContext';
import TestContextOutsideOfProvider from './containers/TestContextOutsideOfProvider';
import GameDetails from './containers/GameDetails';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App">
      <Router basename ="/">
          <Navbar expand="xxl" bg="light">
            <Navbar.Toggle />
            <Navbar.Collapse className="nav-collapse">
              <Nav>
                <Nav.Link as={Link} to="/"> Standings </Nav.Link>
                <Nav.Link as={Link} to="/games"> Final Scores </Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        <Switch>
        <QueryYearContext>
          <Route exact path = "/">
            <Main />
          </Route>
          <Route path = "/games">
            <GamesContainer />
          </Route>
          <Route path = "/admin">
            <Provider store={store}>
              <App2 />
            </Provider>
          </Route>
          <Route path='/game/:id'>
            <GameDetails />
          </Route>
        </QueryYearContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;