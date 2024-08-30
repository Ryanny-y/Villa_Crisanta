const Admin_SideNav = ({ sideNavWidth, toggleSideNav }) => {
  return (
    <nav className='fixed py-3 px-2 bg-yellow-600 top-0 bottom-0 left-0 z-30 duration-200' style={{ width: sideNavWidth}}>
      <div className='flex items-center justify-center flex-col gap-2 border-b text-light border-light pb-2 relative'>
        <img src="images/vclogo.png" alt="Villa Logo" className={`${sideNavWidth === '11rem' ? 'h-12' : 'h-7'}`}/>
        <h1 className={`font-semibold ${sideNavWidth === '11rem' ? 'text-xl' : 'text-sm'} text-center`}>Villa Crisanta <br /> Admin Panel</h1>
        {sideNavWidth === '11rem' 
          ? <i 
              className='bx bx-menu-alt-right absolute top-0 bx-md right-0' 
              onClick={toggleSideNav}
            ></i>
          : <i 
              className='bx bx-menu-alt-left absolute top-0 bx-xs -right-5 bg-yellow-600 text-white rounded-full p-1.5' 
              onClick={toggleSideNav}
            ></i>
        }
      </div>
    </nav>
  );
};

export default Admin_SideNav;
