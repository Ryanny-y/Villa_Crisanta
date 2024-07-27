import HeaderTitle from "../ui/HeaderTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function ContactSection() {
  
  const Header = ({children}) => (
    <h1 className="font-bold text-2xl">{children}</h1>
  );

  const ContactLinks = ({ children, href }) => {
    return (
      <span
        className="text-sm font-medium hover:text-yellow-500 duration-300 cursor-pointer"
        onClick={() => window.open(`${href.charAt(0) === '0' ? 'tel:' : ''}${href}`, "_blank")}
      >
        {children}
      </span>
    );
  };
  const [show, setShow] = useState(false);

  return (
    <section className="contact pt-20" id="contact">
      <div className="container mx-auto  text-center text-black flex flex-col gap-10 items-center">
        <HeaderTitle title="Get In Touch"/>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
          <div className="contacts flex flex-col gap-3 md:basis-1/2">
            <div className="flex justify-between gap-5 flex-wrap">
              <div className="address flex items-start justify-start basis-1/2 flex-grow text-start flex-col gap-1">
                <Header>Address</Header>
                <p className="text-sm font-medium">Blk 26 Lot 10 Barcroft Lake St., Lakewood Subdivision, Brgy. Tadlak, Los Banos, Laguna</p>
                <ContactLinks href="09087969200">Contact No#: +63 9087969200</ContactLinks>
                <ContactLinks href="09513979755">Contact No#: +63 9513979755</ContactLinks>
                <ContactLinks href="09508394289">Contact No#: +63 9508394289</ContactLinks>
              </div>

              <div className="socials items-start flex flex-col gap-1 text-start basis-2/5 flex-grow">
                <Header>Socials</Header>
                <ContactLinks href="#"><FontAwesomeIcon icon={faEnvelope} className="mr-1 text-lg w-5"/> villacrisantalaguna@gmail.com</ContactLinks>
                <ContactLinks href="https://www.facebook.com/CASAJARDINHR"><FontAwesomeIcon icon={faFacebookF} className="mr-2 text-lg w-5"/>Villa Crisanta 2 hot spring Resort</ContactLinks>
                <ContactLinks href="https://www.instagram.com/villacrisantalaguna/"><FontAwesomeIcon icon={faInstagram} className="mr-1 text-lg w-5"/> @villacrisantalaguna</ContactLinks>
              </div>
            </div>

            <div className="open-hours basis-full text-start">
              <Header>Open Hours</Header>

              <div className="mt-2">
                <p className="font-semibold flex items-center gap-2">Open Today 9:00 am - 5:00 pm <FontAwesomeIcon icon={faCaretDown} className="text-lg" onClick={() => setShow(curState => !curState)}/></p>
                {show && <div className="text-sm font-semibold ml-16 flex flex-col gap-1">
                  <p><span className="mr-1 w-8 inline-block">Mon</span> 9:00 am - 5:00 pm</p>
                  <p><span className="mr-1 w-8 inline-block">Tue</span> 9:00 am - 5:00 pm</p>
                  <p><span className="mr-1 w-8 inline-block">Wed</span> 9:00 am - 5:00 pm</p>
                  <p><span className="mr-1 w-8 inline-block">Thu</span> 9:00 am - 5:00 pm</p>
                  <p><span className="mr-1 w-8 inline-block">Fri</span> Close</p>
                  <p><span className="mr-1 w-8 inline-block">Sat</span> Close</p>
                  <p><span className="mr-1 w-8 inline-block">Sun</span> Close</p>
                </div>
                }
              </div>
            </div>
          </div>

          <div className="map basis-1/2 relative flex justify-center md:justify-end">
            <img src="images/landing_page/map.png" loading="lazy" alt="Villa Map" className="h-80 w-full md:min-w-3/4 rounded-md" />
            <button className="text-xs absolute top-3 left-3 bg-white text-black py-2.5 px-4 font-semibold hover:bg-black hover:text-white duration-300" onClick={() => window.open("https://www.google.com/maps/place/Villa+Crisanta+2+Spring+Resort/@14.1774968,121.2078289,741m/data=!3m1!1e3!4m9!3m8!1s0x33bd61869d4f284b:0x1268211129dd2a9f!5m2!4m1!1i2!8m2!3d14.1778159!4d121.2076091!16s%2Fg%2F11h1hzdtsq!5m2!1e2!1e4?hl=en&entry=ttu", "_blank") }>View on Google Map</button>
          </div>
        </div>
      </div>
    </section>
  )
} 