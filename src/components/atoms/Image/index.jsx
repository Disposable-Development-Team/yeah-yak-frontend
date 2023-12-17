import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImage = styled.div`
  img {
    width: ${props => props.width};
    height: ${props => props.height};
  }
`;

const Image = ({ width, height, src, link, newPage, ...props }) => {
  return (
    <StyledImage width={width} height={height}>
      <Link href={link || '#'}>
        <img src={src} alt="이미지" />
      </Link>
    </StyledImage>
  );
};

export default Image;
