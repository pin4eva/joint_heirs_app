import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardAside from "./components/DashboardAside";

interface IProp {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IProp> = ({ children }) => {
  return (
    <div className="dashboard">
      <DashboardAside />
      <main className="dashboard-main">
        <DashboardHeader />
        <section>{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
