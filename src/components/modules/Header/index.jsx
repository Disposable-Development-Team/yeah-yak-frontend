import styled from 'styled-components';
import Image from '@atoms/Image';
import Button from '@atoms/Button';
import { FlexContainer } from '@atoms/Flex';

const StyledHeader = styled.div`
  text-align: center;
`;

const Header = () => {
  return (
    <FlexContainer $justifyContent="space-between" $alignItems="center">
      <Image width="150px" height="100px" src="https://via.placeholder.com/300x200.png?text=SONGJOOWON" link="/" />
      <Button>예약현황</Button>
    </FlexContainer>
  );
};

export default Header;
