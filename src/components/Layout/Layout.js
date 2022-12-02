const Layout = ({ children, className }) => {
  return (
    <div className={`row gx-0 align-items-center justify-content-center ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
