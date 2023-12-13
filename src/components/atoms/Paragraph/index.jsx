const Paragraph = (props) => {
  const { size, weight, children } = props;

  const paragraphStyle = {
    fontSize: size,
    fontWeight: weight,
  };

  return (
    <div style={paragraphStyle}>
      {children}
    </div>
  );
};

export default Paragraph;