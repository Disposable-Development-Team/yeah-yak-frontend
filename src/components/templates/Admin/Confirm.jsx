// TableWithApi.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, generateTableHeaders, renderTableData } from '@modules/Table';
import Button from '@atoms/Button';

export default function Confirm() {
  const [reservationData, setReservationData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://140.238.0.188:3001/reservations');
      setReservationData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Button onClick={fetchData}>새로고침</Button>
      <Table>
        <thead>{generateTableHeaders(reservationData)}</thead>
        <tbody>{renderTableData(reservationData)}</tbody>
      </Table>
    </div>
  );
}
