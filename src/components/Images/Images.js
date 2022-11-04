const Images = ({ photo, className }) => {
  return (
    <div className="col-md-6">
      <img className={className} src={photo} />
    </div>
  );
};

export default Images;
