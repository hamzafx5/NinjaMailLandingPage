export default function Card(props) {
	return (
		<div className={"card " + props.customClass}>
			<img src={props.img} className="card--img" alt="client" />
			<div className="card--text-box">
				<p className="card--text">{props.text}</p>
				<a className="card--link" href="#x">
					Learn More
				</a>
			</div>
		</div>
	);
}
