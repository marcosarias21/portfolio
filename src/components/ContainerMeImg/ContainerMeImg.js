import picture from '../../assets/images/me.jpg';
import './containermeimg.scss';

const ContainerMeImg = () => {
  return (
    <div className='text-center'>
      <img className='img-size' src={picture} />
    </div>
  );
};

export default ContainerMeImg;
