import './container.scss';

const Container = ({ children, className, id }) => {
  return (
    <section className={`d-flex align-items-center justify-content-center ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Container;
