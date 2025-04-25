"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarProps {
  links: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const pathname = usePathname(); // Get the current path
  //console.log(pathname);

  return (
    <nav className="hidden sm:flex flex-row justify-between text-sm md:text-base lg:text-xl 2xl:text-2xl sm:gap-4 md:gap-10 lg:gap-20  font-medium items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`relative pb-1 transition-all duration-300 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:rounded-lg after:transition-all after:duration-300
              ${
                pathname === link.href
                  ? "after:h-[3px] after:bg-gray-700" // Active link
                  : "after:h-0 hover:after:h-[3px] hover:after:bg-gray-500" // Hover link
              }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
