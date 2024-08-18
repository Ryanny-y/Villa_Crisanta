import { createContext, useState } from "react";

export const VillaContext = createContext();

const VillaProvider = ({ children }) => {
  
  const villaData = [
    {
      name: 'Villa Crisanta 1 Spring Resort',
      background_img: 'villa-1.webp',
      totalBedrooms: '5 Bedrooms',
      totalLivingRooms: '3 Living Rooms',
      totalKitchens: '3 Kitchen',
      room_imgs: [

      ],
      amenities: [
        { 'Wifi': 'wifi.png' }, { 'Mountain View': 'mountain.png' }, { 'Dedicated Workspace': 'workspace.png' }, 
        { 'Parking Area': 'front-car.png' }, { 'Pool Table' : 'billiard-ball.png' }, 
        { 'Pets Allowed': 'paws.png' }, { 'Jacuzzi': 'jacuzzi.png' }, { 'Safety Box': 'safe-box.png' }, 
        { 'Bar Counter': 'bar-counter.png' }, { 'Chaise Lounges': 'chaise lounge.png' }, 
        { 'Waterfalls': 'waterfall.png' }, { 'Underwater Lights': 'pool-light.png' }, { 'Balcony': 'balcony.png' }, 
        { 'Rooter Terrace': 'terrace.png' }, { '2nd Floor Lobby': 'lobby.png' }, { 'Common Shower': 'shower.png' } 
      ],
    }
  ]
  const [ villaDetails, setVillaDetails ] = useState(villaData[0]);
  
  
  const value = {
    villaDetails, setVillaDetails, villaData
  }
  return (
    <VillaContext.Provider value={value}>
      {children}
    </VillaContext.Provider>
  )
}

export default VillaProvider