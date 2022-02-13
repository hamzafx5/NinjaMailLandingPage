import React, { useState } from "react";

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<nav className="nav">
			<div className="nav--logo">
				<img src="./img/NinjaMailLogo.png" alt="Logo" />
			</div>
			<div className="nav--links-container" style={{ right: isMenuOpen ? "0" : "-100%" }}>
				<ul className="nav--links-ul">
					<li>
						<a href="#x">FEATURES</a>
					</li>
					<li>
						<a href="#x">PRICING</a>
					</li>
					<li>
						<a href="#x">SERVICES</a>
					</li>
					<li>
						<a href="#x">PARTNERS</a>
					</li>
				</ul>
				<button className="btn nav--view-on-phone">SIGN UP FREE</button>
			</div>
			<button className="btn nav--btn">SIGN UP FREE</button>
			<div
				onClick={() => setIsMenuOpen((prevState) => !prevState)}
				className={"nav--burger_menu" + (isMenuOpen ? " open" : "")}
			>
				<div></div>
			</div>
		</nav>
	);
}
