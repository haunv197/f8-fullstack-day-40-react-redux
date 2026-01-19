import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router";

export default function Navigation() {
  const menus = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Users",
      href: "/users",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <NavLink to={menu.href}>{menu.title}</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
