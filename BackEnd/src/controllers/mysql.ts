import mysql from "mysql";

const con = mysql.createConnection({
    host: 'us-east.connect.psdb.cloud',
    database: 'bd_sireeea',
    user: '9k962i5ph7z162u9z3p2',
    password: 'pscale_pw_gZckuvdH8n9vMZi3B2pJ1S0pxbZriUnyuzBuvKev1Vk'
});
con.connect(error =>{
    if(error) throw (error);
    console.log('database ok');

});


export {con};