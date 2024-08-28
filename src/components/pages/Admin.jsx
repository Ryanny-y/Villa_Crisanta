import { useState } from "react";
import Admin_Header from "./admin/Admin_Header";
import Admin_SideNav from "./admin/Admin_SideNav";
import FilterPanel from "./admin/FilterPanel";

const Admin = () => {
  const [ sideNavWidth, setSideNavWidth ] = useState('11rem');

  return (
    <div className="bg-light relative flex justify-end items-start font-poppins">
      {/* Sidenav Here */}
      <Admin_SideNav sideNavWidth={sideNavWidth}/>

      <main style={{ width: `calc(100% - ${sideNavWidth})`}}>
        <Admin_Header />
        <FilterPanel />
      </main>
    </div>
  );
};

export default Admin;
