const FilterProject = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <h5 className="me-5">Filter Project:</h5>
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">Only React</label>
      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">Full Stack</label>
      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio3">React Native</label>
    </div>
  );
};

export default FilterProject;
