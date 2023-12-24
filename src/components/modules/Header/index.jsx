import styled from 'styled-components';
import Image from '@atoms/Image';
import Button from '@atoms/Button';
import { FlexContainer } from '@atoms/Flex';
import { Link } from 'react-router-dom';
import Modal from '@modules/Modal';
import { useModalContext } from '@modules/Modal/ModalContext';
import Form from '@modules/Form';
import { useState } from 'react';
import Input from '@atoms/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '@images/logo.png';
import { SERVER_HOST } from '@config/config';

const Header = () => {
  const { modalOpen, openModal, closeModal } = useModalContext();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const userInfo = {
        name: values.name,
        phoneNumber: values.phoneNumber,
      };
      // Make an API request using Axios
      const response = await axios.get(
        `http://${SERVER_HOST}/reservations?name=${values.name}&phonenumber=${values.phoneNumber}`,
      );
      console.log(response);
      // Check if the response code is 1
      // if (response.data.code === 1) {
      if (true) {
        // If code is 1, route to /reservations/history with the reservation data
        const reservationData = response.data; // Adjust the property based on your API response structure
        // Use the react-router-dom history object to navigate to the new route
        closeModal('checkUser');
        navigate('/reservations/history', { state: { data: reservationData, ...userInfo } });
      } else {
        // Handle other cases or show an error message
        alert('Reservation failed. Please try again.');
      }
    } catch (error) {
      // Handle API request error
      console.error('Error making API request:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <FlexContainer $justifyContent="space-between" $alignItems="center">
      <Image height="60px" src={logo} link="/" />

      <FlexContainer $justifyContent="flex-end">
        <Link to="/admin">
          <Button color="red">관리자 화면</Button>
        </Link>
        <Button $outline onClick={() => openModal('checkUser')}>
          예약현황
        </Button>
      </FlexContainer>
      <Modal title="정보입력" modalId="checkUser">
        <Form submitHandler={handleSubmit}>
          <FlexContainer $noWrap $gap="0" $column $alignItems="center">
            <Input label="예약자명" name="name" value={values.name} onChange={handleChange} />
            <Input label="전화번호" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
          </FlexContainer>
          <FlexContainer $justifyContent="flex-end">
            <Button type="submit">확인</Button>
          </FlexContainer>
        </Form>
      </Modal>
    </FlexContainer>
  );
};

export default Header;
