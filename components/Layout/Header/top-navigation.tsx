"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TopNavigation: React.FC = () => {
  const menuItems: NavigationMenuItem[] = [
    { title: "products", href: "/products" },
    { title: "blog", href: "/blog" },
  ];

  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-6 ml-5">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={`navigation-${item.href}`}>
              <Link href={item.href} className={`hover:text-primary transition-colors pb-2 ${isActive && "border-b-2 dark:text-primary  dark:border-primary/30"}`}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
