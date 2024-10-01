import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-3 bg-white shadow-primary shadow-md mb-14 rounded-xl overflow-hidden font-bold text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] tracking-[0.1em] text-gray-800">
      <div className="flex items-center">
        <Image
          src="/pankri.png"
          width={100}
          height={100}
          alt="Pankri Logo"
          className="h-16 w-16 mr-3 rounded-full shadow-sm shadow-primary"
        />
        <span className="text-gray-900 font-semibold text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
          PanKri
        </span>
        {/* Make the name bold and a bit darker */}
      </div>
      <nav className="flex space-x-4">
        <a
          href="#skills"
          className="relative group inline-block text-gray-800 p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-200 hover:text-blue-600 text-[0.9rem] sm:text-[1rem] md:text-[1.25rem]"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="relative group inline-block text-gray-800 p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-200 hover:text-blue-600 text-[0.9rem] sm:text-[1rem] md:text-[1.25rem]"
        >
          Projects
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
