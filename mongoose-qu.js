const {mongoose} = require("./server/mongoose.js");
const {todo,user} = require("./server/models.js");
const {ObjectID} = require("mongodb");

var id = "597c69431c84f807b8997d18";
//597c69431c84f807b8997d18

todo.findById(id).then((res)=>{
	if(!res){ return console.log("Record does not exist"); }
	console.log(res);
},(err)=>{
	if(!ObjectID.isValid(id)){
		return console.log("Invalid id is provided.");
	}
	console.log(err);
}
);
