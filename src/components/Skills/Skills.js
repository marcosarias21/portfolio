import './skill.scss';
import { dataSkills } from '../../helper/dataSkills';

const Skills = () => {
  return (
    <div className='col-12 pt-5 text-center'>
      <h1 className='color-pers mt-3 mb-5'>My Skillset </h1>
      <div className='d-flex flex-wrap justify-content-evenly mt-4 py-2'>
        {dataSkills.map(({
          iconClass, cardClass, id,
        }) => {
          return (
        <div key={id} className={`skillCard ${cardClass} p-2`}>
          <i className={`skillIcon ${iconClass}`}></i>
        </div>);
        })}
      </div>
    </div>
  );
};

export default Skills;
