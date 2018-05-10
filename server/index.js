const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const select = 'SELECT * FROM todos';

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'contra',
	database:'react',
	//insecureAuth: true
});

connection.connect((err)=>{
	if(err){
		console.log('sucedio un error');
		console.log(err);
	}
});

console.log(connection);

app.use(cors());

app.get('/',(req,res)=>{
	res.send('hola desde el servidor de la base de datos');

});

app.get('/lista',(req,res)=>{
	connection.query(select,(err,resultado)=>{
		if (err) {
			console.log(err);
		}else{
			return res.json({
				data:resultado
			})
		}

	});
});

app.get('/lista/agregar',(req,res)=>{
	const {id,task} = req.query;
	console.log(req.query);
	const insercion = `INSERT INTO todos VALUES('${id}','${task}')`;
	connection.query(insercion,(err,result)=>{
		if (err) {
			console.log(err);
		}else{
			return res.send('insercion exitosa');
		}
	});
	//console.log(id,task);
	//res.send('se capturo la nueva tarea');
});

app.listen(4000,()=>{
	console.log('\n \n servidor conectado\n \n ');
});