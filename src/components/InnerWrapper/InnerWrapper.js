import './innerwrapper.scss';

const InnerWrapper = ({ children }) => {
  return (
    <div className='inner-wrapper'>{children}</div>
  );
};

export default InnerWrapper;
