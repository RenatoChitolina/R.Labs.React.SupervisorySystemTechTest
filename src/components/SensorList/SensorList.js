import Sensor from "../Sensor/Sensor";

function SensorList({ sensors }) {
  return (
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
                <Sensor key={sensorKey} sensor={sensors[sensorKey]}></Sensor>
            ))}
        </tbody>
    </table>
  );
}

export default SensorList;
