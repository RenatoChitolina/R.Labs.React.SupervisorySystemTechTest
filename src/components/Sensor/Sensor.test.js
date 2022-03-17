import { render } from '@testing-library/react';
import Sensor from './Sensor';

const sensorData = {
    id: "1",
    name: "Export",
    minimumTemperature: 1,
    maximumTemperature: 4,
    temperature: 3,
    status: "all good"
};

describe('Sensor', () => {
    it('renders data text', () => {
        const component = render(
            <table>
                <tbody>
                    <Sensor sensor={sensorData}/>
                </tbody>
            </table>
        );
        
        expect(component.getByText(sensorData.name, {exact: false})).toBeInTheDocument();
        expect(component.getByText(sensorData.status)).toBeInTheDocument();
    });
});
