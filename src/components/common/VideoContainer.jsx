import { useContext, useEffect, useRef } from "react"
import { VillaContext } from "../../context/VillaContext"

const VideoContainer = () => {

  const { villaDetails } = useContext(VillaContext);
  const vidRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          vidRef.current.muted = false;
        } else {
          vidRef.current.muted = true;
        }
      });
    });

    const targetElement = vidRef.current;
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div className='container py-16' style={{ height: '600px', width: '100%'}}>
      <video 
        src={`images/${villaDetails.path}/${villaDetails.background_img}.mp4`} 
        controls
        ref={vidRef}
        autoPlay
        muted
        className='h-full w-full'></video>
    </div>
  )
}

export default VideoContainer