import './outerwrapper.scss';

const OuterWrapper = ({ children }) => {
  return (
    <div className="outer-wrapper">
        {children}
    </div>
  );
};

export default OuterWrapper;
