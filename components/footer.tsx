import Link from "next/link";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramLine,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-bronze transition-colors"
            >
              <RiFacebookFill className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-bronze transition-colors"
            >
              <RiTwitterFill className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-bronze transition-colors"
            >
              <RiInstagramLine className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-bronze transition-colors"
            >
              <RiYoutubeFill className="w-6 h-6" />
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-white font-oswald text-2xl tracking-wider"
            >
              BLA<span className="text-[#aa7656]">X</span>CUT
            </Link>
          </div>

          <div className="text-center md:text-right text-gray-400">
            © {new Date().getFullYear()} Blaxcut. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
