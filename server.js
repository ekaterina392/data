const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Set up a route to proxy requests to the WSDOT API
app.get('/traffic-cameras', async (req, res) => {
    try {
        const response = await fetch('https://www.wsdot.com/traffic/api/HighwayCameras/HighwayCamerasREST.svc/GetCamerasAsJson');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching traffic cameras:', error);
        res.status(500).json({ error: 'Error fetching traffic cameras' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
