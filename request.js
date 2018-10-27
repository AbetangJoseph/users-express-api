const request = require('request');

//This one na just dummy data I use to send http req using 'request' module like ajax.
const reqData = {
    "name": "Abetang Joseph",
    "email": "test@gmail.com"
};

request.post({
    url: 'http://localhost:300/users',
    body: reqData,
    json: true,
}, (error, response, body)=>{
    console.log(body);   
});