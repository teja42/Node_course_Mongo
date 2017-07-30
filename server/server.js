const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");

const {todo,user} = require("./models.js");
const {mongoose} = require("./mongoose.js");

var app = express();

app.use(bodyParser.json())

app.post('/todo',(req,res)=>{
	var new_todo = new todo({
	text: req.body.text,
	completed: false,
	completedAt: null,
	createdAt: _.now()
	});

	new_todo.save().then((doc)=>{
		res.status(200).send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get("/todo",(req,res)=>{
	todo.find().then((result)=>{
		res.send({todos: result});
	},(e)=>{
		res.status(400).send(e);
	})
});

app.get("/todo/:id",(req,res)=>{
	let {id} = req.params;
	todo.findById(id).then((result)=>{
		if(!result){ return res.status(404).send("Record was not Found . \n 404");}
		res.send(result);
	},(err)=>{
		if(!ObjectID.isValid(id)){ return res.status(400).send();}
		res.send("There was an error in fetching Data.");
	})
})

app.listen(3000,()=>{
	console.log("Server is running on port 3000");
});

module.exports = {app}