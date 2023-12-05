import './App.css';
import Termek from './Termek.js';
import { termekek } from './Termekek.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function katt(props){
    console.log(props);
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Babok</h1>
        <article>
          <div className="container">
          <div className="row">
          {termekek.map((elem, index) => {
            return (<Termek key={index} cim={elem.cim} leiras={elem.leiras} ar={elem.ar} katt={katt}/>)
            })
          }
          </div>
        </div>
        </article>
      </header>
    </div>
  );
}

export default App;
