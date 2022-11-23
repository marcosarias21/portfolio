import './container.scss';

const Container = ({ children, className }) => {
  return (
    <section className={`d-flex align-items-center justify-content-center ${className}`}>
      {children}
    </section>
  );
};

export default Container;
