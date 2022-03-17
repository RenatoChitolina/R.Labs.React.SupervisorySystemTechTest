import { useEffect, useState } from 'react';
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
      <table>
        <thead>
          <tr>
            <th align="left">Product (Min - Max)</th>
            <th align="right">Temperature</th>
            <th align="center">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(sensors).map(sensorKey => (
            <tr key={sensors[sensorKey].id}>
              <td align="left" width={200}>{sensors[sensorKey].name} ({sensors[sensorKey].minimumTemperature} - {sensors[sensorKey].maximumTemperature})</td>
              <td align="right" width={200}>{sensors[sensorKey].temperature}</td>
              <td align="center" width={200}>{sensors[sensorKey].status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
