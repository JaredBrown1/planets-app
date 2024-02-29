import Link from "next/link";

import { Antonio } from "next/font/google";

const ant = Antonio({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-6 border-b-[1px] border-gray-700 text-white">
      <h1 className={`${ant.className} text-[28px]`}>THE PLANETS</h1>
      <div className="flex justify-around w-[650px] items-center">
        <Link
          className="border-t-[#419EBB] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Mercury"
        >
          MERCURY
        </Link>
        <Link
          className="border-t-[#EDA249] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Venus"
        >
          VENUS
        </Link>
        <Link
          className="border-t-[#6F2ED6] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Earth"
        >
          EARTH
        </Link>
        <Link
          className="border-t-[#D14C32] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Mars"
        >
          MARS
        </Link>
        <Link
          className="border-t-[#D83A34] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Jupiter"
        >
          JUPITER
        </Link>
        <Link
          className="border-t-[#CD5120] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Saturn"
        >
          SATURN
        </Link>
        <Link
          className="border-t-[#1EC2A4] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Uranus"
        >
          URANUS
        </Link>
        <Link
          className="border-t-[#2D68F0] hover:border-t-2 h-full pt-7 mt-[-40px]"
          href="/Neptune"
        >
          NEPTUNE
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
