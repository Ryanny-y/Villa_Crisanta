import Header from '../common/Header'
import { Outlet } from 'react-router-dom';
import VillaProvider from '../../context/VillaContext'
import Footer from '../common/Footer';
import { useEffect, useState } from 'react';
import useGetBookings from '../../utils/hooks/useGetBookings';

const Layout = () => {

  const [ loading, setLoading ] = useState(true);
  const { reservationData, error, isLoading } = useGetBookings();

  useEffect(() => {
    if(!isLoading && !error) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [reservationData, error, isLoading, loading])

  return (
    <div className='font-poppins text-dark bg-light'>
      {loading && 
        <div className='fixed -top-10 -bottom-10 -right-10 -left-10 bg-light z-50'>
          <div className='flex flex-col gap-5 items-center justify-center w-full h-full container text-center'>
            <header className='flex flex-col md:flex-row items-center gap-5 px-10'>
              <div className="loader"></div>
              <h1 className='text-lg md:text-3xl font-bold loader-text'>Welcome to Villa Crisanta Spring Resort!</h1>
            </header>
            
            <p className='text-xs font-semibold'>Please wait...</p>
          </div>
        </div>
      }

      <VillaProvider> 
        <Header />
          <Outlet context={{loading, setLoading}}/>
        <Footer />
      </VillaProvider>
    </div>
  )
}

export default Layout