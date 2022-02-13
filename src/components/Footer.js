export default function Footer() {
	return (
		<div className="container">
			<footer className="footer">
				<div className="footer--links-box">
					<div className="footer--brand">
						<img src="./img/NinjaMailLogo.png" alt="brand" />
					</div>
					<ul className="footer--links-list">
						<li>
							<a href="#x">About Us</a>
						</li>
						<li>
							<a href="#x">Tutorials</a>
						</li>
						<li>
							<a href="#x">Resources</a>
						</li>
						<li>
							<a href="#x">Help Center</a>
						</li>
						<li>
							<a href="#x">Template</a>
						</li>
						<li>
							<a href="#x">Case Studies</a>
						</li>
					</ul>
					<ul className="footer--links-list">
						<li>
							<a href="#x">Features</a>
						</li>
						<li>
							<a href="#x">Pricing</a>
						</li>
						<li>
							<a href="#x">Services</a>
						</li>
						<li>
							<a href="#x">Partners</a>
						</li>
					</ul>
					<ul className="footer--links-list">
						<li>
							<a href="#x">Medium</a>
						</li>
						<li>
							<a href="#x">Twitter</a>
						</li>
						<li>
							<a href="#x">Facebook</a>
						</li>
						<li>
							<a href="#x">Instagram</a>
						</li>
						<li>
							<a href="#x">Linkedin</a>
						</li>
					</ul>
					<ul className="footer--links-list">
						<li>
							<a href="#x">Contact</a>
						</li>
						<li>
							<a href="#x">Slack</a>
						</li>
						<li>
							<a href="#x">Jobs</a>
						</li>
					</ul>
				</div>
				<a className="footer--copy-right" href="#x">
					All the right reserved to the compony {new Date().getFullYear()} &copy;
				</a>
			</footer>
		</div>
	);
}
