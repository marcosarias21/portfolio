const Images = ({ photo, className }) => {
  return (
    <div className="d-none d-sm-block
    d-sm-none d-md-block col-md-12 col-lg-6">
      <img className={className} src={photo} />
    </div>
  );
};

export default Images;
