const express = require('express');
//As I no use babel na why I no border use the es6 'import' keyword.

const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

routes(app);

app.listen(port, (error)=>{
    error ? console.log(`Error: ${error}`) : console.log(`App started on port ${port}...`);
});