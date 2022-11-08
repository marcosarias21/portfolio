import bgVideo from '../../assets/video/Letter - 18003.mp4';
import './backgroundvideo.scss';

const BackgroundVideo = () => {
  return (
    <video
    autoPlay
    muted loop
    className='myVideo'
    playsInline>
      <source src={bgVideo} type='video/mp4' id='myVideo1' />
    </video>
  );
};

export default BackgroundVideo;
