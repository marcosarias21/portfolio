import Container from '../../components/Container/Container';
import Description from '../../components/Description/Description';
import Images from '../../components/Images/Images';
import imgLight from '../../assets/images/imgLight.gif';
import WhoIm from '../../components/WhoIm/WhoIm';
import Layout from '../../components/Layout/Layout';
import ContainerMeImg from '../../components/ContainerMeImg/ContainerMeImg';

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Layout>
          <Description />
          <Images photo={imgLight}/>
        </Layout>
      </Container>
    </section>
    <section>
      <div className='bg-color-light'>
          <Container>
            <Layout>
              <WhoIm />
              <ContainerMeImg />
            </Layout>
          </Container>
        </div>
    </section>
    </>
  );
};

export default Home;
