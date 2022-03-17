import './Sensor.css'

function Sensor({ sensor }) {
    return (
        <tr>
            <td align="left" width={200}>{sensor.name} ({sensor.minimumTemperature} - {sensor.maximumTemperature})</td>
            <td align="right" width={200} className={sensor.status}>{sensor.temperature}</td>
            <td align="center" width={200} className={sensor.status}>{sensor.status}</td>
        </tr>
    );
  }
  
  export default Sensor;
  