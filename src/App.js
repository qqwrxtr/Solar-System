import './App.css';
import Stars from './components/Stars/Stars';
import Astronaut from './components/Astronaut/Astronaut';
import Planet from './components/Planet/Planet';
import Planet2 from './components/Planet2/Planet2';

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
            <Planet/>
            <Planet2/>
        </div>
    </div>
  );
}

export default App;
