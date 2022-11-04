import './container.scss';

const Container = ({ children }) => {
  return (
    <section className="container d-flex justify-content-center">
      {children}
    </section>
  );
};

export default Container;
