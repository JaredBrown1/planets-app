import Navbar from "./components/Navbar";
import PlanetInfo from "./components/planet/PlanetInfo";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-[22px]  text-white bg-background">
			<Navbar />
			<PlanetInfo />
		</main>
	);
}
