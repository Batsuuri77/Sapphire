"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMerchantStore } from "../stores/useMerchantStore"; // Zustand store

interface SidebarProps {
  links: { name: string; href: string }[];
  icons: { name: string; atr: React.JSX.Element }[];
  navClassName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  links,
  icons,
  navClassName = "w-64 min-h-full bg-gray-200 shadow-md px-6 py-8 rounded-2xl",
}) => {
  const pathname = usePathname(); // Get the current path
  const { merchantId, setMerchantId } = useMerchantStore(); // Zustand store for merchantId

  return (
    <nav className={navClassName}>
      <ul className="flex flex-col gap-4">
        {links.map((link, index) => {
          //const isActive = pathname === link.href;
          const isActive = pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={{
                  pathname: link.href,
                  query: merchantId ? { merchantId } : {}, // Only include merchantId in the URL if it exists
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
              >
                <span className="w-5 h-5">{icons[index].atr}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
