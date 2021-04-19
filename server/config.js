var mysql      = require('mysql');
var connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "scorify",
    multipleStatements : true
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;