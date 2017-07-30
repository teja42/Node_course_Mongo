const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost/Todo",(err,db)=>{
	if(err){ return console.log("Cant connect to db");}
	db.collection("todos").deleteMany({_id : new ObjectID("5977519a0f3588679ce18c0f")}).then((res)=>{
		console.log(res);
	})
});