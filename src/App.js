import './App.css';
import Stars from './components/Stars/Stars';
import Astronaut from './components/Astronaut/Astronaut';
import Layer1 from './components/Layer1/Layer1';
import Layer2 from './components/Layer2/Layer2';
import Layer3 from './components/Layer3/Layer3';

function App() {
  return (
    <div className="App">
      <div className='stars'>
        <Stars/>
      </div>
      <div className='astronaut '>
        <Astronaut/>
      </div>
      <div className="planet-absolute">
            <Layer1/>
            <Layer2/>
            <Layer3/>
        </div>
    </div>
  );
}

export default App;
