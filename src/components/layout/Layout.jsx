import Header from '../common/Header'
import { Outlet } from 'react-router-dom';
import VillaProvider from '../../context/VillaContext'

const Layout = () => {
  return (
    <div className='font-poppins text-dark bg-light'>
      <VillaProvider> 
        <Header />
          <Outlet />
        {/* <Footer /> */}
      </VillaProvider>
    </div>
  )
}

export default Layout