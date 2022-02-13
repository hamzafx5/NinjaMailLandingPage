export default function ClientCard(props) {
	return (
		<div className="client-card">
			<img className="client-card--img" src={props.clientImg} alt="client" />
			{props.name && <h2 className="client-card--name">{props.name}</h2>}
			{props.memberSince && <p className="client-card--member-since">Member since {props.memberSince}</p>}
		</div>
	);
}
