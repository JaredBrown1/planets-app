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

	if (!planet) {
		return <div>Not found</div>;
	}

	return (
		<div className="flex flex-col justify-center items-center text-white pt-[96px]">
			<div className="flex justify-between text-left items-center p-4">
				<div className="relative">
					<Image
						src={planet.images.planet}
						width={10}
						height={10}
						alt="planet image"
						layout="responsive"
					/>
				</div>

				<div className="pl-[153px]">
					<h1 className="text-[80px]">{planet.name}</h1>
					<p className="text-[14px] w-[350px] leading-[25px]">
						{planet.overview["content"]}
					</p>
					<p className="pt-[49px]">
						Source:
						<span>
							<Link href={planet.overview["source"]}>Wikipedia</Link>
						</span>
					</p>
				</div>
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
