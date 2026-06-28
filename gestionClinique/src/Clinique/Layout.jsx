import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../Styles/layout.css";

function Layout() {

  return (

    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <main>

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default Layout;