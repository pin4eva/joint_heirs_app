import Link from "next/link";
import React from "react";

const DashboardAside = () => {
  return (
    <aside className="dashboard-aside">
      <ul>
        {navList.map((nav) => (
          <li key={nav.name}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardAside;

const navList = [
  { name: "Overview", link: "/dashboard" },
  { name: "Members", link: "/dashboard/members" },
  // {name: "Accounts", link:'/dashboard/accounts'},
];
