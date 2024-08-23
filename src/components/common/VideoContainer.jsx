import { useContext } from "react"
import { VillaContext } from "../../context/VillaContext"

const VideoContainer = () => {

  const { villaDetails } = useContext(VillaContext);

  return (
    <div className='container py-16' style={{ height: '600px', width: '100%'}}>
      <video src={`images/${villaDetails.path}/${villaDetails.background_img}.mp4`} controls className='h-full w-full'></video>
    </div>
  )
}

export default VideoContainer