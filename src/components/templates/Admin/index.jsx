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

  const columns = [
    { key: '시작일', header: '시작일' },
    { key: '종료일', header: '종료일' },
    { key: '신청일', header: '신청일' },
    { key: '예약자명', header: '예약자명' },
    { key: '전화번호', header: '전화번호' },
    { key: '상태', header: '상태' },
  ];

  return (
    <div>
      <Button onClick={fetchData}>새로고침</Button>
      <Table data={mapDataToColumns(reservationData)} columns={columns} />
    </div>
  );
}