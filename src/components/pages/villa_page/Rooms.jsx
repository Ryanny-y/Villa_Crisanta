import SectionLayout from "../../layout/SectionLayout";
import VillaHeaderTitle from "../../common/VillaHeaderTitle";
import VillaSlider from "../../ui/villa/VillaSlider";
import { useContext } from "react";
import { VillaContext } from "../../../context/VillaContext";
import { useState } from "react";

const Rooms = () => {
  const { villaDetails } = useContext(VillaContext);

  const [imgLoaded, setImgLoaded] = useState(false);
  const handleLoad = () => {
    setImgLoaded(true);
  };

  return (
    <SectionLayout sectionId="rooms">
      <VillaHeaderTitle title="ROOMS" />

      <VillaSlider>
        {villaDetails.room_imgs.map((room) => (
          <swiper-slide key={room} lazy="true">
            <div
              className={`h-full shadow-lg w-full`}
              style={{
                background: `url("images/${villaDetails.path}/small/${room}.png") no-repeat center/cover`,
                objectFit: "cover",
              }}
            >
              <img
                src={`images/${villaDetails.path}/rooms/${room}.webp`}
                alt="Room Image"
                className={`h-full shadow-lg w-full ${
                  imgLoaded ? "opacity-1" : "opacity-0"
                } transition-opacity duration-1000 object-cover`}
                onLoad={handleLoad}
                loading="lazy"
                data-aos={imgLoaded && "fade"}
              />
            </div>
          </swiper-slide>
        ))}
      </VillaSlider>
    </SectionLayout>
  );
};

export default Rooms;
