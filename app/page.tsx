import Image from "next/image";
import Hero from "./components/Hero";
import Leader from "./components/Leader";
import Creations from "./components/Creations";
import Button from "./components/ui/Button";
import Footer from "./components/ui/Footer";

export default function Home() {
	return (
		<main className="max-w-[375px] lg:max-w-[1440px] relative  m-auto">
			<Hero />
			<Leader />
			<Creations />
			<div className="w-[60vw] m-auto px-8 mb-20 lg:hidden">
				<Button />
			</div>

			<Footer />
		</main>
	);
}
