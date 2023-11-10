import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import { Antonio } from "next/font/google";

const ant = Antonio({ subsets: ["latin"] });

export async function generateStaticParams() {
	return await data.map((planet) => ({
		id: planet.name.toString(),
	}));
}

const PlanetInfo = ({ params }) => {
	const planet = data.find((p) => p.name.toString() === params.id);

	if (!planet) {
		return <div>Not found</div>;
	}

	function getBgClass(id) {
		switch (id) {
			case "Mercury":
				return "bg-Mercury";
			case "Venus":
				return "bg-Venus";
			case "Earth":
				return "bg-Earth";
			case "Mars":
				return "bg-Mars";
			case "Jupiter":
				return "bg-Jupiter";
			case "Saturn":
				return "bg-Saturn";
			case "Uranus":
				return "bg-Uranus";
			case "Neptune":
				return "bg-Neptune";
			default:
				return "";
		}
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
					<p className="flex pt-[49px]">
						Source :
						<Link href={planet.overview["source"]} className="underline pl-1">
							Wikipedia{" "}
						</Link>
						<span className="pt-2 pl-2">
							<Image
								src="/assets/icon-source.svg"
								width={12}
								height={12}
								alt="source icon"
							/>
						</span>
					</p>

					<div className="pt-[39px] text-[14px]">
						<div
							className={`flex pt-3 pl-6 mb-[16px] w-[350px] h-[48px] border-gray-700 border-2 cursor-pointer ${getBgClass(
								params.id
							)}`}
						>
							<p className="pr-8">01</p>
							<h2>OVERVIEW</h2>
						</div>
						<div
							className={`flex pt-3 pl-6 mb-[16px] w-[350px] h-[48px] border-gray-700 border-2 cursor-pointer ${getBgClass(
								params.id
							)}`}
						>
							<p className="pr-8">02</p>
							<h2>INTERNAL STRUCTURE</h2>
						</div>
						<div
							className={`flex pt-3 pl-6 mb-[16px] w-[350px] h-[48px] border-gray-700 border-2 cursor-pointer ${getBgClass(
								params.id
							)}`}
						>
							<p className="pr-8">03</p>
							<h2>SURFACE GEOLOGY</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="flex">
				<div className="mr-[30px] w-[255px] h-[128px] border-gray-600 border-2 flex flex-col justify-center pl-6">
					<h2 className="text-[12px] text-gray-400">ROTATION TIME</h2>
					<p className={`${ant.className} text-[40px]`}>{planet.rotation}</p>
				</div>
				<div className="mr-[30px] w-[255px] h-[128px] border-gray-600 border-2 flex flex-col justify-center pl-6">
					<h2 className="text-[12px] text-gray-400">REVOLUTION TIME</h2>
					<p className={`${ant.className} text-[40px]`}>{planet.revolution}</p>
				</div>
				<div className="mr-[30px] w-[255px] h-[128px] border-gray-600 border-2 flex flex-col justify-center pl-6">
					<h2 className="text-[12px] text-gray-400">RADIUS</h2>
					<p className={`${ant.className} text-[40px]`}>{planet.radius}</p>
				</div>
				<div className="mr-[30px] w-[255px] h-[128px] border-gray-600 border-2 flex flex-col justify-center pl-6">
					<h2 className="text-[12px] text-gray-400">AVERAGE TEMP.</h2>
					<p className={`${ant.className} text-[40px]`}>{planet.temperature}</p>
				</div>
			</div>
		</div>
	);
};
export default PlanetInfo;
