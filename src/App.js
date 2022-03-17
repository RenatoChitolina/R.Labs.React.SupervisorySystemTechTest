import { useEffect, useState } from 'react';
import SensorList from './components/SensorList';
import { sensorProvider } from './services/sensorProvider';

function App() {
  const [availableSensors, setAvailableSensors] = useState([]);
  const [sensors, setSensors] = useState({});

  useEffect(() => {
    const request = () =>
      sensorProvider
        .getAvailableSensors()
        .then((response) => setAvailableSensors(response));
    
    setInterval(request, 5000);
    
    request();
  }, []);

  useEffect(() => {
    availableSensors.forEach(sensorId => {
      sensorProvider
        .getSensorTemperature(sensorId)
        .then((response) => {
          setSensors(prevSensors => ({
            ...prevSensors,
            [sensorId]: {
              ...sensorId,
              ...response,
            }
          }))
        }
        );
      });
  }, [availableSensors]);

  return (
    <div className="App">
      <h2>Beers</h2>
      <SensorList sensors={sensors}></SensorList>
    </div>
  );
}

export default App;
