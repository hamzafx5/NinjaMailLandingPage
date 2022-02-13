import ClientCard from "./ClientCard";

export default function ClientsSection() {
	return (
		<div className="container">
			<section className="client-section">
				<ClientCard clientImg="./img/client-1.png" name="Frankie" memberSince="2016" />
				<ClientCard clientImg="./img/client-2.png" name="Camile" memberSince="2012" />
				<ClientCard clientImg="./img/client-3.png" name="Elayne" memberSince="2018" />
			</section>
		</div>
	);
}
