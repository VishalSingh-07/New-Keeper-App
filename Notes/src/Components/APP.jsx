import React, { useEffect } from "react"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"
import Navbar from "./Navbar"
import axios from "axios"
function APP() {
	const [notes, setNotes] = React.useState([])

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/getAll")
			.then((response) => setNotes(response.data))
	}, [])
	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote]
		})
	}
	const deleteNote = (title) => {
		axios
			.post("http://localhost:5000/api/delete", { title })
			.then((response) => this.setNotes(response.data))
		window.location.reload(false)
	}
	return (
		<div>
			<Navbar />
			<CreateArea onAdd={addNote} />

			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				)
			})}
			<Footer />
		</div>
	)
}

export default APP
