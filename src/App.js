import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero";
import LearnHow from "./components/LearnHow";
import CardSection from "./components/CardSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import BrandSection from "./components/BrandSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Nav />
			<Hero />
			<LearnHow />
			<CardSection />
			<ClientsSection />
			<ContactSection />
			<BrandSection />
			<CallToActionSection />
			<Footer />
		</>
	);
};

export default App;
