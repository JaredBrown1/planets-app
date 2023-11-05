import data from "@/data/data.json";

export function generateStaticParams() {
	return data.map((planet) => ({
		id: planet.name.toString(),
	}));
}

const PlanetInfo = ({ params }) => {
	const planet = data.find((p) => p.name.toString() === params.id);

	console.log("planet", planet);

	if (!planet) {
		return <div>Not found</div>;
	}

	return <div className="w-[500px] h-[500px] text-white">{planet.name}</div>;
};
export default PlanetInfo;
