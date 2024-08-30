const Admin_SideNav = ({ sideNavWidth }) => {
  return (
    <nav className='fixed py-3 px-2 bg-yellow-600 top-0 bottom-0 left-0 z-30' style={{ width: sideNavWidth}}>
      <div className="flex items-center justify-center flex-col gap-2 border-b text-light border-primaryGray pb-2">
        <img src="images/vclogo.png" alt="Villa Logo" className="h-12"/>
        <h1 className="font-semibold text-xl">Villa Crisanta <br /> Admin Panel</h1>
      </div>
    </nav>
  );
};

export default Admin_SideNav;
