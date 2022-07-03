import './App.css';
import Main from './containers/Main.js';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import FinalScores from './containers/FinalScores.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import App2 from './App2';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/RootReducer.js';
import QueryYearContext from './contexts/queryYearContext';
import TestContextOutsideOfProvider from './containers/TestContextOutsideOfProvider';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App">
      {/* <TestContextOutsideOfProvider /> */}
      <QueryYearContext>
        <Router basename="/mlb-standings">
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
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/games">
              <FinalScores />
            </Route>
            <Route path="/admin">
              <Provider store={store}>
                <App2 />
              </Provider>
            </Route>
          </Switch>
        </Router>
      </QueryYearContext>
    </div>
  );
}

export default App;