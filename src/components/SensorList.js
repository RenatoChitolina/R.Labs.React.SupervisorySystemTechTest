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
            <tr key={sensors[sensorKey].id}>
                <td align="left" width={200}>{sensors[sensorKey].name} ({sensors[sensorKey].minimumTemperature} - {sensors[sensorKey].maximumTemperature})</td>
                <td align="right" width={200}>{sensors[sensorKey].temperature}</td>
                <td align="center" width={200}>{sensors[sensorKey].status}</td>
            </tr>
            ))}
        </tbody>
    </table>
  );
}

export default SensorList;
