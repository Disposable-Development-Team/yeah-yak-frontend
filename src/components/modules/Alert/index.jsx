import React from 'react';
import styled from 'styled-components';
import Input from '@atoms/Input';
import Button from '@atoms/Button';

const StyledAlert = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Alert = () => {
  return (
    <StyledAlert>
      <div>
        <Input hasInput={true} isReadOnly={true} value="정보입력" />
      </div>
      <div>
        <Input hasInput={true} isReadOnly={false} placeholder="예약자명" />
      </div>
      <div>
        <Input hasInput={true} isReadOnly={false} placeholder="전화번호" />
      </div>
      <div>
        <Button />
      </div>
    </StyledAlert>
  );
};

export default Alert;