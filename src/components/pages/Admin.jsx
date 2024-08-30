import { useEffect, useState } from "react";
import Admin_Header from "./admin/Admin_Header";
import Admin_SideNav from "./admin/Admin_SideNav";
import FilterPanel from "./admin/FilterPanel";
import BookingTable from "./admin/BookingTable";

const Admin = () => {
  const [ sideNavWidth, setSideNavWidth ] = useState('11rem');
  
  // EFFECT FOR RESIZING AND CHANGING SIDENAV WIDTH
  useEffect(() => {
    const changeWidth = () => {
      if(window.innerWidth < 640) {
        setSideNavWidth('5rem')
      } else {
        setSideNavWidth('11rem')
      }
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, []);

  const toggleSideNav = () => {
    if(sideNavWidth === '11rem') {
      setSideNavWidth('5rem')
    }  else {
      setSideNavWidth('11rem')
    }
  }

  return (
    <div className="bg-light relative flex justify-end items-start font-poppins">
      {/* Sidenav Here */}
      <Admin_SideNav sideNavWidth={sideNavWidth} toggleSideNav={toggleSideNav}/>

      <main className="duration-200" style={{ width: `calc(100% - ${sideNavWidth})`}}>
        <Admin_Header />
        <FilterPanel />
        <BookingTable />
      </main>
    </div>
  );
};

export default Admin;
