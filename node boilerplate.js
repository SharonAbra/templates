/////// EXPRESS /////////

// get external modules
const exp = require('express');
const cors = require('cors');
const bp = require('body-parser');
const app = exp();

// middleware
app.use(cors());
app.use('/',exp.static(__dirname+'/public'))
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

// get request
app.get('/path', (req,res) => {
    res.send(req.query);
    res.send({data: data});
})

app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
  })

app.listen('port');

/////// PG AND KNEX /////////

// initiate connection with database

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port: '5433',
      user : 'postgres',
      password : '',
      database : 'chatbot'
    }
  });

  // retrieve data
const getData = () => {
  return knex.select('column_name', 'column_name',).from('table_name');
}

// prepare functions for export
module.exports = {
    getData: getData
}

/////// AXIOS /////////

const axios = require('axios');

const getApi = async () => {
  try{
    const res = await axios.get('url');
    const data = await res.data;
    return data
  }
  catch(e){
    console.log(e);
  }
}

module.exports = {
    getApi: getApi
}

