import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex justify-between w-full p-6 border-b-[1px] border-gray-700 text-white">
			<h1 className="text-[28px]">THE PLANETS</h1>
			<div className="flex justify-around w-[650px] items-center">
				<Link href="/Mercury">MERCURY</Link>
				<Link href="/Venus">VENUS</Link>
				<Link href="/Earth">EARTH</Link>
				<Link href="/Mars">MARS</Link>
				<Link href="/Jupiter">JUPITER</Link>
				<Link href="/Saturn">SATURN</Link>
				<Link href="/Uranus">URANUS</Link>
				<Link href="/Neptune">NEPTUNE</Link>
			</div>
		</div>
	);
};
export default Navbar;
