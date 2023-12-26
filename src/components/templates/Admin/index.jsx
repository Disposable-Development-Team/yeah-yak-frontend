import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@modules/Table';
import Button from '@atoms/Button';
import Modal from '@modules/Modal';
import { SERVER_HOST } from '@config/config';
import { useModalContext } from '@modules/Modal/ModalContext';
import Input from '@atoms/Input';
import { FlexContainer } from '@atoms/Flex';
import SelectList from '@atoms/SelectList';

export default function Confirm() {
  const { openModal, closeModal } = useModalContext();
  const [reservationData, setReservationData] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);

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
    if (!data || !data.item) {
      return [];
    }

    return data.item.map((item) => ({
      시작일자: item.startDate,
      종료일자: item.endDate,
      신청일: item.createdDate,
      예약자명: item.name,
      전화번호: item.phoneNumber,
      상태: (
        <Button onClick={() => handleReservationClick(item)}>
          {item.status.description}
        </Button>
      ),
    }));
  };

  const handleReservationClick = (reservation) => {
    setSelectedReservation(reservation);
    openModal('statusModal');
  };

  const closeModalHandler = () => {
    setSelectedReservation(null);
    closeModal('statusModal');
  };

  return (
    <FlexContainer $justifyContent="space-between" $alignItems="center">
      <Table data={mapDataToColumns(reservationData)} />
      {selectedReservation && (
        <Modal title="상태 확인" modalId="statusModal" hasButton={false}>
          <FlexContainer $column $gap="16px">
            <Input label="예약자명" readOnly value={selectedReservation.name} />
            <Input label="전화번호" readOnly value={selectedReservation.phoneNumber} />
            <SelectList label="상태" value={selectedReservation.status.description} />
          </FlexContainer>
          <FlexContainer $justifyContent="flex-end">
            <Button onClick={closeModalHandler}>확인</Button>
          </FlexContainer>
        </Modal>
      )}
    </FlexContainer>
  );
}