const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server started at port no. 3000')
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (request,response) =>{
    response.send("hello jee kaise ho aap");
})

app.post('/api/cars', (request,response) => {
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
 .then(()=>{console.log("Connection Successful")})
 .catch( (error) => {console.log("Recieve an error")});
