import { useEffect, useState } from "react";
import HeaderNav from "./components/common/HeaderNav";
import { useLocation } from "react-router-dom";
import HeroSection from "./components/section/HeroSection";
import ChangeTitle from './utils/hooks/changeTitle'; 

export default function Villa() {

  const [ data, setData ] = useState({});
  const {state} = useLocation();
  useEffect(() => {
    if(state && state.data) {
      setData(state.data)
    }
  }, [state])

  ChangeTitle(data.id);

  return (
    <>
      <HeaderNav/>
      <main>
        <HeroSection data={data}/>
        {/* Video Section */}

        {/* About */}

        {/* Rooms */}

        {/* Amenities */}

        {/* Photo Gallery */}

        {/* Accomodation Rates */}

        {/* Contact and Booking */}
      </main>
    </>
  )
}