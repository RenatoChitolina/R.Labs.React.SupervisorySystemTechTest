# Pragmateam code challenge client (React)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

### Notes

- More tests could be created on structure in its current state, but for timebox reasons, It won't be done.
- Alternatives to polling strategy:
  - Bi-lateral communication strategy with [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).
  - Database replication between backend and frontend through protocols like [CouchDb](https://docs.couchdb.org/en/1.6.1/replication/protocol.html) (Although the main goal of this approach is actually to implement [Offline First](https://rxdb.info/offline-first.html))

### Things to be done

- When an invalid sensor id is passed to the backend, currently it is returning 404. So it would be good to create a component to handle the unsuccessful request and show it on the screen accordingly.
- Currently, a request to the backend is made to get a list of all available sensor ids and then N more requests (one per available sensor id) are made each 5 seconds to retrieve the current temperature and status for each sensor. An alternative could be to create a request to retrieve data from more than only one sensor at a time, getting a greater bulk of information, but this is always a subject of a deeper analysis, that should consider threshold and scalability.
- All variable settings (eg.: Backend endpoint) would need to be put into a config file.
- All error handling would need to be enhanced.
