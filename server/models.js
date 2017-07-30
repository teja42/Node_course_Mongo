console.log("Importing Models.");

var mongoose = require("mongoose");

var todo = mongoose.model("todos",{
	text: { 
		type: String,
		minlength: 1,
		trim: true,
		required: true
	},
	completed: {type: Boolean},
	completedAt: {type: Number},
	createdAt: {type: Number}
});

var user = mongoose.model("users",{
	email: {
		type: String,
		trim: true,
		required: true,
		minlength: 1
	}
});

module.exports = {todo,user}