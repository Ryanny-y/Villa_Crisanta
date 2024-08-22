import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import VillaHeaderTitle from "../../common/VillaHeaderTitle";
import GalleryImage from "../../ui/villa/GalleryImage";
import { useContext, useState } from "react";
import { VillaContext } from "../../../context/VillaContext";

const VillaPhotoGallery = () => {
  const {
    villaDetails: { gallery_order },
  } = useContext(VillaContext);
  const [showImg, setShowImg] = useState("");

  return (
    <section
      id="villa-photo-gallery"
      className="mb-20 md:mb-16 lg:mb-12 pt-20 overflow-hidden"
    >
      <div className="container mx-auto  flex flex-col gap-10">
        <VillaHeaderTitle title="PHOTO GALLERY" />

        {showImg && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 bottom-0 opacity-95"
              style={{
                background: `url(images/photo_gallery/villa1/small/gallery-${showImg}.png) no-repeat center / cover`,
              }}
            ></div>
            <div className="relative opacity-100 z-10">
              <img
                src={`images/photo_gallery/villa1/gallery-${showImg}.webp`}
                alt="Show Image"
                className="h-96 w-full"
              />
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-5 right-5 text-white bg-dark p-3 font-semibold rounded-full cursor-pointer hover:text-dark hover:bg-white duration-500"
                onClick={() => setShowImg("")}
              />
            </div>
          </div>
        )}

        <div className="gallery-container grid grid-cols-2 md:grid-cols-4 grid-rows-grid-none md:grid-rows-grid-lg gap-4 w-11/12 mx-auto">
          {gallery_order.map((order) => (
            <GalleryImage key={order} order={order} setShowImg={setShowImg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillaPhotoGallery;
