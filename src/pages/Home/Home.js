import Container from '../../components/Container/Container';
import Description from '../../components/Description/Description';
import Images from '../../components/Images/Images';

const Home = () => {
  return (
    <Container>
      <div className='row align-items-center justify-content-center'>
        <Description />
        <Images />
      </div>
    </Container>
  );
};

export default Home;
