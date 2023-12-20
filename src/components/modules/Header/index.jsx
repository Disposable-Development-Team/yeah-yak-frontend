import styled from 'styled-components';
import Image from '@atoms/Image';
import Button from '@atoms/Button';
import { FlexContainer } from '@atoms/Flex';
import { Link } from 'react-router-dom';
import Modal from '@modules/Modal';
import { useModalContext } from '@modules/Modal/ModalContext';

const StyledHeader = styled.div`
  text-align: center;
`;

const Header = () => {
  const { modalOpen, openModal, closeModal } = useModalContext();

  return (
    <FlexContainer $justifyContent="space-between" $alignItems="center">
      <Image width="150px" height="100px" src="https://via.placeholder.com/300x200.png?text=SONGJOOWON" link="/" />

      <Button $outline onClick={() => openModal('checkUser')}>
        예약현황
      </Button>
      <Modal title="정보입력" modalId="checkUser">
        <Link to="/reservations/history">
          <Button>가보자잇</Button>
        </Link>
      </Modal>
    </FlexContainer>
  );
};

export default Header;
