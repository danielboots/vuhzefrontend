const Buttons = ({ children, ...otherProps }) => {
  return (
    <button className="" {...otherProps}>
      {children}
    </button>
  );
};

export default Buttons;
