const Input = ({ hasInput, isReadOnly, ...restProps }) => {
  // 만약 hasInput이 false이면 input 요소를 생성하지 않습니다.
  if (!hasInput) {
    return null;
  }

  return (
    <input
      readOnly={isReadOnly}
      {...restProps}
    />
  );
};

export default Input;