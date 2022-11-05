import './container.scss';

const Container = ({ children }) => {
  return (
    <section className="container d-flex align-items-center justify-content-center">
      {children}
    </section>
  );
};

export default Container;
