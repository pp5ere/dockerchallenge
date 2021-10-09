const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'pp5ere',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sqlInsert = `INSERT INTO people(name) values('Rodrigo')`
connection.query(sqlInsert)


let html = `<h1>Full Cygle Rocks!</h1>`
const sqlSelect = `SELECT name FROM people`
connection.query(sqlSelect, (error, rows) => {
    if (error) {
        html = '<h3>'+error.message+'</h3>'
    }
    rows.forEach(row => {
        html += '<p>'+row.name+'</p>'
    });
});

connection.end()

app.get('/', (req,res) => {
    res.send(html)
})

app.listen(port, ()=>{
    console.log('Rodando na porta '+ port)
})