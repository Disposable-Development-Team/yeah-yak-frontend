// TableWithApi.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@modules/Table';
import Button from '@atoms/Button';
import { SERVER_HOST } from '@config/config';

export default function Confirm() {
  const [reservationData, setReservationData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${SERVER_HOST}/reservations`);
      setReservationData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapDataToColumns = (data) => {
    return data.map((item) => ({
      시작일자: item.startDate,
      종료일자: item.endDate,
      신청일: item.createdDate,
      예약자명: item.name,
      전화번호: item.phoneNumber,
      상태: item.status.description,
    }));
  };

  return (
    <div>
      <Button onClick={fetchData}>새로고침</Button>
      <Table data={mapDataToColumns(reservationData)} />
    </div>
  );
}