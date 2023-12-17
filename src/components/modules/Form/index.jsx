import styled from 'styled-components';

const StyledForm = styled.form``;

const Form = ({ children, action, submitHandler, ...props }) => {
  return <StyledForm onSubmit={submitHandler}>{children}</StyledForm>;
};

export default Form;
