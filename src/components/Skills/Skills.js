import './skill.scss';
import { dataSkills } from '../../helper/dataSkills';
import Container from '../Container/Container';

const Skills = () => {
  return (
    <Container>
      <div className='d-flex flex-column align-items-center'>
          <h1 className='mb-2 text-secondary'> My <span className='color-pers'>Skillset</span> </h1>
          <div className='d-flex flex-wrap justify-content-center skill-section-space'>
            {dataSkills.map(({
              iconClass, title, cardClass, id,
            }) => {
              return (
              <div key={id} className={`text-center skillCard ${cardClass}`}>
                <i className={`skillIcon ${iconClass}`}></i>
                <h5> {title} </h5>
            </div>);
            })}
          </div>
      </div>
    </Container>
  );
};

export default Skills;
