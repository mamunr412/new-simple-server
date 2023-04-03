const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
const port =  5000;
const app = express();

app.use(cors());
app.use(express.json());

// create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_mysql_database'
  });

// connect to MySQL database
connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database: ' + error.stack);
      return;
    }
  
    console.log('Connected to MySQL database as id ' + connection.threadId);
  });
  
  // perform MySQL query
  const sqlQuery = 'SELECT * FROM your_table_name';
  connection.query(sqlQuery, (error, results, fields) => {
    if (error) throw error;
    console.log('The result is: ', results);
  });
  
  // close MySQL connection
  connection.end((error) => {
    if (error) {
      console.error('Error closing MySQL database: ' + error.stack);
      return;
    }
  
    console.log('MySQL database connection closed.');
  });


app.get('/',(req,res)=>{
    res.send('server is running')
})
app.listen(port, () => {
    console.log("listining to port ", port);
  });