import Header from '../common/Header'
import { Outlet } from 'react-router-dom';
import VillaProvider from '../../context/VillaContext'
import Footer from '../common/Footer';

const Layout = () => {
  return (
    <div className='font-poppins text-dark bg-light'>
      <VillaProvider> 
        <Header />
          <Outlet />
        <Footer />
      </VillaProvider>
    </div>
  )
}

export default Layout