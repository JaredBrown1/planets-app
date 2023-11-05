import Image from "next/image";
import Link from "next/link";

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

	return (
		<div className="text-white">
			<div className="w-[500px] h-[500px] p-4">
				<Image
					src={planet.images.planet}
					width={145}
					height={290}
					alt="planet image"
				/>
				<h1 className="text-[80px]">{planet.name}</h1>
				<p>{planet.overview["content"]}</p>
				<p>
					Source:{" "}
					<span>
						<Link href={planet.overview["source"]}>Wikipedia</Link>
					</span>
				</p>
			</div>
			<div className="flex">
				<div className="w-[255px] h-[128px]">
					<h2>ROTATION TIME</h2>
					{planet.rotation}
				</div>
				<div className="w-[255px] h-[128px]">
					<h2>REVOLUTION TIME</h2>
					{planet.revolution}
				</div>
				<div className="w-[255px] h-[128px]">
					<h2>RADIUS</h2>
					{planet.radius}
				</div>
				<div className="w-[255px] h-[128px]">
					<h2>AVERAGE TEMP.</h2>
					{planet.temperature}
				</div>
			</div>
		</div>
	);
};
export default PlanetInfo;
