import './App.css';
import League from './League';
{/*import Mlb from './components/Mlb'*/}


function App() {
  return (
    <div className="App">
       <h3> MLB Standings </h3>
        {/*<Mlb />*/}
        <League league={0}/>
        <League league={1}/>
    </div>
  );
}

export default App;
