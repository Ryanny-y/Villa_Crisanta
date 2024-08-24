import Header from '../common/Header'
import { Outlet } from 'react-router-dom';
import VillaProvider from '../../context/VillaContext'
import Footer from '../common/Footer';
import { useEffect, useState } from 'react';

const Layout = () => {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [loading])


  return (
    <div className='font-poppins text-dark bg-light'>
      {loading && 
        <div className='fixed -top-10 -bottom-10 -right-10 -left-10 bg-light z-50'>
          <div className='flex flex-col gap-5 items-center justify-center w-full h-full container text-center'>
            <header className=' flex items-center gap-5'>
              <div className="loader"></div>
              <h1 className='text-3xl font-bold loader-text'> Welcome to Villa Crisanta Spring Resort!</h1>
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