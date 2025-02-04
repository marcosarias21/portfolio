import { useContext, useEffect } from 'react';
import projectContext from '../../provider/FilterProjectContext';

const FilterProject = () => {
  const { setTypeProject } = useContext(projectContext);

  const handleChangeProjects = (e) => {
    setTypeProject(e.target.value);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChangeProjects}>
      <input type="radio" className="btn-check" defaultChecked value='Only React' name="btnradio" id="btnradio1" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">Only React</label>
      <input type="radio" className="btn-check" value='Full Stack' name="btnradio" id="btnradio2" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">Full Stack</label>
    </div>
  );
};

export default FilterProject;
