import React from "react";
import NavLink, { NavLinkType } from "./nav-link";

type Props = {
  links: NavLinkType[];
}

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;