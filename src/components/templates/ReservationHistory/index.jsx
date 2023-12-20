// TableWithApi.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, generateTableHeaders, renderTableData } from '@modules/Table';
import Button from '@atoms/Button';
import Header from '@modules/Header';
import { FlexContainer, FlexItem } from '@atoms/Flex';

export default function ReservationHistory({ name, phoneNumber }) {
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
      <Table>
        <thead>{generateTableHeaders(reservationData)}</thead>
        <tbody>{renderTableData(reservationData)}</tbody>
      </Table>
    </FlexContainer>
  );
}
