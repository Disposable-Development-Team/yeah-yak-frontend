import React, { useId } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 8px;
  min-width: 187px;
  border: ${props => (props.readOnly ? 'none' : '1px solid #ccc;')};
  border-radius: 4px;
  background-color: ${props => (props.readOnly ? 'transparent' : '#fff')};
  cursor: ${props => (props.readOnly ? 'default' : 'auto')};
`;

const LabeledInput = ({ label, readOnly, type, name, value, onChange }) => {
  const inputId = useId();
  return (
    <Container>
      <Row>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <Input id={inputId} name={name} readOnly={readOnly} type={type} value={value} onChange={onChange} />
      </Row>
    </Container>
  );
};

export default LabeledInput;
