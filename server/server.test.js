const {app} = require("./server.js");
const {todo} = require("./models.js");

const expect = require("expect");
const supertest = require("supertest");

beforeEach((done)=>{
	todo.remove({}).then(()=> done());
});

describe("Databases operations",()=>{
	it("Should check todo info before writing to DB",(done)=>{
		let text = "";

		supertest(app)
		.post("/todo")
		.send({text})
		.expect(400)
		.end((err,res)=>{
			if(err){return done(err);}

			todo.find({}).then((response)=>{
				expect(response.length).toBe(0)
			}).catch((e)=> done(e));
			done();
		});
	});
});