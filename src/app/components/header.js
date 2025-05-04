import Link from "next/link";
import Image from "next/image";
import English from "../../../public/svgs/english";
import Italy from "../../../public/svgs/italy";
import MobileMenu from "./MobileMenu";

// Header Component
const Header = () => {
  return (
    <header className="bg-[#292929] shadow-md relative">
      <div className="mx-10 py-4 flex justify-between items-center xl:mr-16">
        <div className="flex items-center space-x-10">
          <Link href="/" className="ml-4 items-center w-24 h-full sm:w-32 lg:w-36">
            <Image
              src="/imgs/Logo.jpeg"
              alt="Logo RHE Consultora"
              width={150}
              height={150}
              className="object-fit"
            />
          </Link>
          <h4 className="hidden sm:block text-lg font-semibold text-white">
            Recursos Humanos Especializados
          </h4>
        </div>

        {/* Mobile menu button and navigation */}
        <MobileMenu />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex content-end">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/es/home" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/positions" className="text-gray-300 hover:text-white">
                Positions
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                <Image
                  src="/imgs/spain.png"
                  alt="ES"
                  width={28}
                  height={28}
                  className="object-fit"
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                <English width={33} height={33}/>
              </Link>
            </li>
            <li>
              <Link href="/it/home-italiano" className="text-gray-300 hover:text-white">
                <Italy width={27} height={27}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;