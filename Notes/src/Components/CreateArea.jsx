import React from "react"
import AddBoxIcon from "@mui/icons-material/AddBox"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"
import axios from "axios"
function CreateArea(props) {
	const [isExpanded, setExpanded] = React.useState(false)
	const [note, setNotes] = React.useState({
		title: "",
		content: "",
	})
	function handleChange(event) {
		const { name, value } = event.target
		setNotes((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			}
		})
	}
	function submitNote(setNotes) {
		if (note.title) {
			axios
				.post("http://localhost:5000/api/addNew", note)
				.then((response) => setNotes(response.data))
		}
		window.location.reload(false)
		setNotes.preventDefault()
	}
	function expand() {
		setExpanded(true)
	}
	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						className="titleinput"
						onChange={handleChange}
						name="title"
						autoComplete="off"
						placeholder="Title"
						value={note.title}
					/>
				)}
				<textarea
					onClick={expand}
					onChange={handleChange}
					name="content"
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
					value={note.content}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
						<AddBoxIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	)
}

export default CreateArea
