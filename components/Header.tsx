import Image from "next/image";
import logo from "../public/logo.svg";

export default function Header() {
  return (
    <header className="bg-gray-200 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Company Logo"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <nav>
          <ul className="flex space-x-4 text-[#006ec7]">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
