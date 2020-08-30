const mysql = require('mysql');
const {Builder, By, Key, until} = require('selenium-webdriver');

const info = {
    user:'kjimin2123',
    password:'12345678',
    host:'gondr.asuscomm.com',
    database:'kjimin2123'
};

const con = mysql.createConnection(info);

function query(sql, data){
    return new Promise( (res, rej)=>{
        con.query(sql, data, (err, result)=>{
            if(err) rej(err);
            else res(result);
        });
    });
}

module.exports.query = query;