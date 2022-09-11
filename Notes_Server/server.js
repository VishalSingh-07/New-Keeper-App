require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
mongoose
	.connect(process.env.MONGODB, {
		useNewUrlParser: true,
	})
	.then(() => console.log("Database Connected"))
	.catch((err) => console.log(err))

const notesSchema = mongoose.Schema({
	title: String,
	content: String,
})

const Note = new mongoose.model("Notes", notesSchema)

app.get("/api/getAll", function (request, response) {
	Note.find({}, (err, NoteList) => {
		if (err) {
			console.log(err)
		} else {
			response.status(200).send(NoteList)
		}
	})
})

app.post("/api/addNew", function (request, response) {
	const { title, content } = request.body
	const notesobj = new Note({
		title: title,
		content: content,
	})
	console.log(notesobj)
	notesobj.save((err) => {
		if (err) {
			console.log(err)
		}
		Note.find({}, (err, NoteList) => {
			if (err) {
				console.log(err)
			} else {
				response.status(200).send(NoteList)
			}
		})
	})
})
app.post("/api/delete", function (request, response) {
	const { title } = request.body

	Note.deleteOne({ title: title }, function (err) {
		if (err) {
			console.log(err)
		} else {
			console.log("Successfully deleted the document")
		}
	})
})
const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
	console.log(`Server started on ${PORT}`)
})
