import styled from 'styled-components';

const StyledImage = styled.div`
  a {
    text-decoration: none;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

const Image = (props) => {
  const { width, height, src, link } = props;

  return (
    <StyledImage width={width} height={height}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt="이미지"
        />
      </a>
    </StyledImage>
  );
};

export default Image;
