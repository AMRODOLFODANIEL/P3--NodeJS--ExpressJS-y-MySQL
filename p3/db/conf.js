const mysql = require('mysql');

const connection = mysql.createConnection({

host: 'localhost',

user: 'root',

password: 'Ralcala@ucol.mx',

database: 'prueba'

});

connection.connect(

(err) => {

if(err){

console.log(err);

return;

}else{

console.log('BD esta conectada');

}

}

);

module.exports = connection;