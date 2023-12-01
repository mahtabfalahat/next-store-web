"use client";
import { Menu } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItems: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-x-6 ml-5">
        {Menu.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={`navigation-${item.href}`}>
              <Link
                href={item.href}
                className={`hover:text-primary transition-colors pb-2 ${
                  isActive &&
                  "border-b-2 dark:text-primary  dark:border-primary/30"
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
