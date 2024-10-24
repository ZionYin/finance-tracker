'use client'

import { usePathname } from "next/navigation";
import NavButton from "./nav-button";

const routes = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Transactions",
        path: "/transactions",
    },
    {
        name: "Accounts",
        path: "/accounts",
    },
    {
        name: "Categories",
        path: "/categories",
    },
    {
        name: "Settings",
        path: "/settings",
    },
]

const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route) => (
                <NavButton
                    key={route.name}
                    href={route.path}
                    label={route.name}
                    isActive={pathname === route.path}
                />
            ))}
        </nav>
    );
}

export default Navigation;