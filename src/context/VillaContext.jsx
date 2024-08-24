import { createContext, useEffect, useState } from "react";

export const VillaContext = createContext();

const VillaProvider = ({ children }) => {
  const villaData = [
    {
      name: "Villa Crisanta 1 Spring Resort",
      background_img: "villa-1",
      path: "villa1",
      totalBedrooms: "5 Bedrooms",
      totalLivingRooms: "3 Living Rooms",
      totalKitchens: "3 Kitchen",
      amenities: [
        { Wifi: "wifi.png" },
        { "Mountain View": "mountain.png" },
        { "Dedicated Workspace": "workspace.png" },
        { "Parking Area": "front-car.png" },
        { "Pool Table": "billiard-ball.png" },
        { "Pets Allowed": "paws.png" },
        { Jacuzzi: "jacuzzi.png" },
        { "Safety Box": "safe-box.png" },
        { "Bar Counter": "bar-counter.png" },
        { "Chaise Lounges": "chaise lounge.png" },
        { Waterfalls: "waterfall.png" },
        { "Underwater Lights": "pool-light.png" },
        { Balcony: "balcony.png" },
        { "Roofed Terrace": "terrace.png" },
        { "2nd Floor Lobby": "lobby.png" },
        { "Common Shower": "shower.png" },
      ],
      room_imgs: [
        "room1",
        "room2",
        "room3",
        "room4",
        "room5",
        "room6",
        "room7",
        "room8",
        "room9",
        "room10",
        "room11",
        "room12",
      ],
      amenities_img: ["amenities-1", "amenities-2", "amenities-3"],
      gallery_order: [
        "21",
        "1",
        "5",
        "11",
        "13",
        "16",
        "20",
        "4",
        "3",
        "8",
        "2",
        "14",
        "10",
        "17",
        "9",
        "12",
      ],
      accommodation_rates: [
        {
          id: "1",
          days: "FRIDAY - SUNDAY & HOLIDAYS",
          rates: [{ "21 HOUR RATE (7 AM TO 4 PM)": "₱28, 000" }],
          duration: "1500",
        },
        {
          id: "2",
          days: "MONDAY TO THURSDAY",
          rates: [
            { "DAY RATE (8 AM TO 5 PM)": "₱28, 000" },
            { "NIGHT RATE (7 PM TO 6 AM)": "₱15, 000" },
            { "EXTENDED STAY (7 PM TO 4 PM)": "₱23, 000" },
          ],
          duration: "2000",
        },
        {
          id: "3",
          days: "PEAK SEASONS",
          rates: [{ "21 HOUR RATE (7 AM TO 4 PM)": "₱28, 000" }],
          duration: "2500",
        },
      ],
    },
    {
      name: "Villa Crisanta 2 Spring Resort",
      background_img: "villa-2",
      path: "villa2",
      totalBedrooms: "8 Bedrooms",
      totalLivingRooms: "3 Living Rooms",
      totalKitchens: "3 Kitchen",
      amenities: [
        { Wifi: "wifi.png" },
        { "Mountain View": "mountain.png" },
        { "Dedicated Workspace": "workspace.png" },
        { "Parking Area": "front-car.png" },
        { "Pool Table": "billiard-ball.png" },
        { "Pets Allowed": "paws.png" },
        { Jacuzzi: "jacuzzi.png" },
        { "Spa and Massage": "spa.png" },
        { "Safety Box": "safe-box.png" },
        { "Powder Rooms": "power-room.png" },
        { "Bar Counter": "bar-counter.png" },
        { "Chaise Lounges": "chaise lounge.png" },
        { Waterfalls: "waterfall.png" },
        { "Underwater Lights": "pool-light.png" },
        { Balcony: "balcony.png" },
        { "Roofed Terrace": "terrace.png" },
        { "2nd Floor Lobby": "lobby.png" },
        { "Common Shower": "shower.png" },
      ],
      room_imgs: [
        "room1",
        "room2",
        "room3",
        "room4",
        "room5",
        "room6",
        "room7",
      ],
      amenities_img: ["amenities-1", "amenities-2", "amenities-3"],
      gallery_order: [
        "21",
        "1",
        "5",
        "11",
        "13",
        "16",
        "20",
        "4",
        "3",
        "8",
        "2",
        "14",
        "10",
        "17",
        "9",
        "12",
      ],
      accommodation_rates: [
        {
          id: "1",
          days: "FRIDAY - SUNDAY & HOLIDAYS",
          rates: [{ "21 HOUR RATE (7 AM TO 4 PM)": "₱28, 000" }],
          duration: "1500",
        },
        {
          id: "2",
          days: "MONDAY TO THURSDAY",
          rates: [
            { "DAY RATE (8 AM TO 5 PM)": "₱28, 000" },
            { "NIGHT RATE (7 PM TO 6 AM)": "₱15, 000" },
            { "EXTENDED STAY (7 PM TO 4 PM)": "₱23, 000" },
          ],
          duration: "2000",
        },
        {
          id: "3",
          days: "PEAK SEASONS",
          rates: [{ "21 HOUR RATE (7 AM TO 4 PM)": "₱28, 000" }],
          duration: "2500",
        },
      ],
    },
  ];
  const [villaDetails, setVillaDetails] = useState(villaData[0]);

  const value = {
    villaDetails,
    setVillaDetails,
    villaData,
  };
  return (
    <VillaContext.Provider value={value}>
      {children}
    </VillaContext.Provider>
  );
};

export default VillaProvider;
