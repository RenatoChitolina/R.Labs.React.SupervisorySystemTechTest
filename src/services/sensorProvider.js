const BaseUrl = 'http://localhost:8081/'

const getAvailableSensors = () => {
    return fetch(BaseUrl + 'sensors')
        .then((response) => response.json());
}

const getSensorTemperature = (sensorId) => {
    return fetch(BaseUrl + `temperature/${sensorId}`)
        .then((response) => response.json())
}

export const sensorProvider = {
    getAvailableSensors,
    getSensorTemperature
}