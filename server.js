const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, '/dist', 'service-demo')))

const googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyCanIiqmWSJarc9Q1ngxvc0T-b-LG4D_N8"

app.get('/api/restaurants', (req, res) => {
    request.get(googlePLacesQueryUrl)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 