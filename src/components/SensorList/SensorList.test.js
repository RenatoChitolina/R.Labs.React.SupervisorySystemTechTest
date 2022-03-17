import { render } from '@testing-library/react';
import SensorList from './SensorList';

const sensorListData = [
    {
        id: "1",
        name: "IPA",
        minimumTemperature: 1,
        maximumTemperature: 4,
        temperature: 3,
        status: "all good"
    },
    {
        id: "2",
        name: "Weiss",
        minimumTemperature: 1,
        maximumTemperature: 4,
        temperature: 3,
        status: "all good"
    },
    {
        id: "3",
        name: "Export",
        minimumTemperature: 1,
        maximumTemperature: 4,
        temperature: 3,
        status: "all good"
    },
    {
        id: "4",
        name: "Red Ale",
        minimumTemperature: 1,
        maximumTemperature: 4,
        temperature: 3,
        status: "all good"
    }
];

describe('SensorList', () => {
    it('renders same row count as array count', () => {
        const tableTrHeaderLength = 1;
        
        const { container } = render(<SensorList sensors={sensorListData}/>);
        
        const trs = container.querySelectorAll('tr');

        expect(trs).toHaveLength(tableTrHeaderLength + sensorListData.length);
    });
});
