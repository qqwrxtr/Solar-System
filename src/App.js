import './App.css';
import SolarSystem from './components/SolarSystem/Solarsystem';
import Stars from './components/Stars/Stars';

function App() {
  return (
    <div className="App">
      <div className='stars'>
        <Stars/>
      </div>
      <div className='solar_system_showcase'>
        <SolarSystem/>
      </div>
    </div>
  );
}

export default App;
