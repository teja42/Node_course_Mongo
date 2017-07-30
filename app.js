const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost/Todo",(err,db)=>{
	if(err){ return console.log("Cant connect to db");}
	db.collection("todos").find().count().then((res)=>{
		console.log(`No. of documents = ${res}`);
	},(err)=>{
		console.log(err);
	});
});


/*
const {MongoClient} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Todo",(err,db)=>{
	if(err){
		return console.log("Unable to connect to the database \n ",err);
	}
	db.collection('users').insertOne({
		name: "Teja",
		desc : "Full Stack web dev"
	},(err,result)=>{
		if(err){
			return console.log("Unable to write data to the database ",err);
		}

		console.log(result.ops[0]._id.getTimestamp());
	});
	db.close();
}); */