export default function ContactSection() {
	return (
		<div className="container">
			<section className="contact">
				<h2 className="contact--title h1">
					Learn how others are reaching their audience easier than ever before.
				</h2>
				<div className="contact--form-box">
					<input type="email" name="email" className="input" required />
					<button type="submit" className="btn">Send</button>
				</div>
			</section>
		</div>
	);
}
