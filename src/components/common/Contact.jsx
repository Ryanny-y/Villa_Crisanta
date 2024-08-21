import HeaderTitle from './HeaderTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Schedule from '../ui/Schedule';

const Contact = () => {
  const [ isOpen, setIsOpen ] = useState('Open');
  const [ showSched, setShowSched ] = useState(false);
  const today = dayjs().day();

  useEffect(() => {
    if([0, 5, 6].includes(today)) {
      setIsOpen('Close');
    } else {
      setIsOpen('Open')
    }
  }, [today])

  const schedule = [
    {
      day: 'Mon',
      time: '9:00 am - 5:00 pm'
    },
    {
      day: 'Tue',
      time: '9:00 am - 5:00 pm'
    },
    {
      day: 'Wed',
      time: '9:00 am - 5:00 pm'
    },
    {
      day: 'Thu',
      time: '9:00 am - 5:00 pm'
    },
    {
      day: 'Fri',
      time: 'Close'
    },
    {
      day: 'Sat',
      time: 'Close'
    },
    {
      day: 'Sun',
      time: 'Close'
    },
  ]


  return (
    <section id="contact" className='text-white bg-dark mt-14 py-14 flex flex-col gap-10 pt-20'>
      <div className='container'>
        <HeaderTitle title="Get In Touch"/>
      </div>

      {/* Map */}
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3228.615943203518!2d121.2078289!3d14.1774968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd61869d4f284b%3A0x1268211129dd2a9f!2sVilla%20Crisanta%202%20Spring%20Resort!5e1!3m2!1sen!2sph!4v1724051511815!5m2!1sen!2sph" style={{height: '400px', width: '100%', outline: 'none !important', border: 'none !important'}} loading="lazy"></iframe>
      </div>

      <div className="container flex items-stretch flex-wrap justify-center gap-10 text-sm font-semibold text-center">
        <div className="contacts flex flex-col gap-2 flex-1 basis-60 max-w-80">
          <h1 className='text-3xl mb-4'>Contacts</h1>
          <address>Blk 26 Lot 10 Barcroft Lake St., Lakewood Subdivision, Brgy. Tadlak, Los Banos, Laguna</address>
          <a href="tel:09087969200">Contact No#: +63 9087969200</a>
          <a href="tel:09513979755">Contact No#: +63 9513979755</a>
          <a href="tel:09508394289">Contact No#: +63 9508394289</a>
        </div>
        <div className="socials flex flex-col gap-2 flex-1 basis-60 max-w-80">
          <h1 className='text-3xl mb-4'>Socials</h1>
          <a href="" target="_blank" className='flex items-center justify-center gap-2'>
            <FontAwesomeIcon icon={faEnvelope}/>
            villacrisantalaguna@gmail.com
          </a>
          <a href="https://www.facebook.com/CASAJARDINHR" target="_blank" className='flex items-center justify-center gap-2'>
            <FontAwesomeIcon icon={faFacebook}/>
            Villa Crisanta 2 Hot Spring Resort 
          </a>
          <a href="https://www.instagram.com/villacrisantalaguna/" target="_blank" className='flex items-center justify-center gap-2'>
            <FontAwesomeIcon icon={faInstagram}/>
            @villacrisantalaguna
          </a>
        </div>
        <div className="open-hours flex flex-col gap-2 flex-1 basis-60 max-w-80 relative">
          <h1 className='text-3xl mb-4'>Open Hours</h1>
          {!showSched && <p className='text-xl'>{isOpen} Today</p>}
          <FontAwesomeIcon icon={showSched ? faCaretDown : faCaretRight} 
            onClick={() => setShowSched(prev => !prev)} 
            className={`absolute ${showSched ? 'top-15 right-14' : 'top-16 right-20'} hover:text-yellow-600 duration-200 text-xl`}
          />
          {showSched && <Schedule schedule={schedule}/>}
        </div>
      </div>

    </section>
  )
}

export default Contact