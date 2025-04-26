import Link from "next/link";
import Image from "next/image";

// Header Component
const Header = () => (
  <header className="bg-black shadow-md">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.jpeg"
              alt="Logo RHE Consultora"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <h4 className="hidden md:block text-lg font-semibold text-white">
            Rhe Consultora - Recursos Humanos Especializados
          </h4>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/es/home" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/es/positions" className="text-gray-300 hover:text-white">
                Positions
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                English
              </Link>
            </li>
            <li>
              <Link href="/it/home-italiano" className="text-gray-300 hover:text-white">
                Italiano
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;