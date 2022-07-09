const env = require('../config');

const sql = require('mssql');

const config = {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    server: env.DB_HOST,
    database: env.DATABASE,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    }
};

async function GetProducts(){
    try {
        await sql.connect(config)
        const result = await sql.query("SELECT * FROM Product_Table");
        return result;
    } catch (err) {
        console.log(err);
    }
};


 module.exports = {GetProducts};