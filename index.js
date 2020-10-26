const express = require("express")
const app = express()
app.use(express.json())

const student = [
{id: 1, name: "naz"},
{id: 2, name: "Asif"}
]

app.get("/student", (req,res) => {		
			res.send(student)

})

app.get("/student/:id", (req,res) => {
	
		const c1 = student.find( (c) => {
			
			return parseInt(c.id) === parseInt(req.params.id)
		})
		if(!c1)
			res.send("404 Not found")
		//console.log(c1)
        else		
			res.send(c1.name)

})

app.post("/student/enter", (req,res) => {
	console.log("hello")
	const new_entry = {
	id : req.body.id,
	 name : req.body.name
	} 
	
	student.push(new_entry)
	console.log(new_entry)
	res.send(new_entry)
})

app.get("/:str/:id1/:id2", (req,res) => {
	if(req.params.str === "sum"){
		var a = parseInt(req.params.id1)
		var b = a + parseInt(req.params.id2)
	}
	if(req.params.str === "sub"){
		var a = parseInt(req.params.id1)
		var b = a - parseInt(req.params.id2)
	}
	console.log(b)
	res.send(b.toString())
})

app.listen(3000, ()=> console.log("Listen to my port....") )