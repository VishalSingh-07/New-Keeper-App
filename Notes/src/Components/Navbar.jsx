/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Date from "./date"
function Navbar() {
	return (
		// eslint-disable-next-line react/style-prop-object
		<nav class="navbar navbar-expand-lg navbar-light bg-light header">
			<div class="container-fluid headericons">
				<a class="navbar-brand headerh1">
					<i className="fas fa-lightbulb icons"></i>Keeper App
				</a>
			</div>

			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active DateStyle" aria-current="page" href="#">
						<Date />
					</a>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
