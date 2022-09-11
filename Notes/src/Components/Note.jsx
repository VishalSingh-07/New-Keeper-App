import React from "react"
import DeleteIcon from "@mui/icons-material/Delete"
function Note(props) {
	function handleClick() {
		props.onDelete(props.title);

	}
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button className="deletebutton"onClick={handleClick}><DeleteIcon/></button>
		</div>
	)
}

export default Note
