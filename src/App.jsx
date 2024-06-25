import React from "react";

import { Outlet } from "react-router-dom";

import DashBoardHeader from "./components/Layout/DashBoardHeader";
import { SidebarToogleProvider } from "./context/SidebarContext";
import DashboardSidebar from "./components/specific/DashboardSidebar";
const App = () => {
  return (
    <SidebarToogleProvider>
      <div className="w-[100%] bg-slate-100">
        <DashBoardHeader />
        <DashboardSidebar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </SidebarToogleProvider>
  );
};

export default App;
