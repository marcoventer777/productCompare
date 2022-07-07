const config = require("./config");
const mysql = require('mssql');




async function con(){
    try {
        let pool = await mysql.connect(config);
        console.log('Connected');
        let result = await pool.request().query('SELECT * FROM Product_Store_Table');
        console.log(result);
        mysql.close();
    } catch (error) {
        console.log(error.message);
        mysql.close();
    }
}

con();

module.exports = { con };