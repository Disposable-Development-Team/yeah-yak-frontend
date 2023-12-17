import styled from 'styled-components';

const StyledParagraph = styled.div`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
`;

const Paragraph = (props) => {
  const { size, weight, children } = props;

  return (
    <StyledParagraph size={size} weight={weight}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
