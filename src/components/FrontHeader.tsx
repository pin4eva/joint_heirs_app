"use client";

import Link from "next/link";
import React from "react";

const FrontHeader = () => {
  return (
    <header>
      <nav className="flex align-middle justify-between container mx-auto">
        <h4>Logo</h4>
        <ul className="flex gap-4">
          {navList.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default FrontHeader;

const navList = [
  { name: "About", link: "/about" },
  { name: "Sermons", link: "/sermons" },
  { name: "Events", link: "/events" },
  { name: "Branches", link: "/branches" },
  { name: "Join Us", link: "/dashboard" },
];
