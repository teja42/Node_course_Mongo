const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Todo",(err,db)=>{
	if(err){
		return console.log("Can't connect to the db");
	}

	db.collection("users").findOneAndUpdate({
		_id: new ObjectID("597b20ee70da80f271064f05") // filter
	},{
		$inc: {a_number : 1},
		$set: {name : "Shiva Teja"}  // update
	},{
		returnOriginal : false //options (optional)
	}).then((result)=>{
		console.log(result);
	});

});
