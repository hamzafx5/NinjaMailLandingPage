import Card from "./Card";

export default function CardSection() {
	return (
		<section className="card-section">
			<div className="container">
				<Card
					img="./img/card-1.png"
					text="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."
					customClass="left"
				/>
				<Card
					img="./img/card-2.png"
					text="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools."
					customClass="right"
				/>
				<div className="about_service">
					<h1>The source for proven, engaging email campaigns</h1>
					<p>
						Whether you’re a startup, small business, e-commerce store, or want to promote your app,
						NinjaMail has the feature set tailored for your business.
					</p>
				</div>
			</div>
		</section>
	);
}
