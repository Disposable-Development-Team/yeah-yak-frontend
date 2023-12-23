// TableWithApi.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@modules/Table';
import Button from '@atoms/Button';
import Header from '@modules/Header';
import { FlexContainer, FlexItem } from '@atoms/Flex';
import { useLocation } from 'react-router';

export default function ReservationHistory(props) {
  const { state } = useLocation();
  const { data, name, phoneNumber } = state;

  const [reservationData, setReservationData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://140.238.0.188:8080/reservations?name=${name}&phonenumber=${phoneNumber}`,
      );
      setReservationData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlexContainer>
      <FlexItem $flex="1 1 100%">
        <Header />
      </FlexItem>
      <Button onClick={fetchData}>새로고침</Button>
      <Table data={data} />
    </FlexContainer>
  );
}
