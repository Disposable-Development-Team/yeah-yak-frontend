import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@modules/Table';
import Button from '@atoms/Button';
import Modal from '@modules/Modal';
import Input from '@atoms/Input';
import SelectList from '@atoms/SelectList';
import { FlexContainer } from '@atoms/Flex';
import { SERVER_HOST } from '@config/config';
import { useModalContext } from '@modules/Modal/ModalContext';

const Confirm = () => {
  const { openModal, closeModal } = useModalContext();
  const [reservationData, setReservationData] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [originalStatus, setOriginalStatus] = useState(null);

  const statusOptions = [
    { value: 1, label: "승인 대기" },
    { value: 2, label: "승인" },
    { value: 3, label: "취소" },
    { value: 4, label: "반려" },
    { value: 5, label: "이용완료" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  // 데이터를 불러오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${SERVER_HOST}/reservations`);
      setReservationData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 예약 상태를 업데이트하는 함수
  const handleConfirmButtonClick = async (newStatus) => {
    try {
      // API 호출을 통해 상태 업데이트
      await axios.post(`http://${SERVER_HOST}/reservations/${selectedReservation.id}`, {
        status: newStatus,
      });

      // 데이터 다시 불러오기
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      // 팝업 닫기
      closeModal('statusModal');
    }
  };

  // 예약 상태 변경 확인 여부를 묻는 함수
  const askConfirmation = (selectedOption) => {
    const newStatus = selectedOption.value;
    const isStatusChanged = newStatus !== originalStatus;

    if (isStatusChanged) {
      const isConfirmed = window.confirm(
        `"${selectedOption.label}" 상태로 변경하시겠습니까?`
      );

      if (isConfirmed) {
        // 변경이 확인되면 업데이트 수행
        handleConfirmButtonClick(newStatus);
      }
    }
  };

  // 예약 상태 변경 시 호출되는 콜백 함수
  const handleStatusChange = (selectedOption) => {
    setSelectedStatus(selectedOption.value);
    askConfirmation(selectedOption);
  };

  // 예약 상태 클릭 시 호출되는 함수
  const handleReservationClick = (reservation) => {
    setSelectedReservation(reservation);
    setSelectedStatus(reservation.status.status);
    setOriginalStatus(reservation.status.status);
    openModal('statusModal');
  };

  // 예약 데이터를 테이블 형태로 매핑하는 함수
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

  return (
    <FlexContainer $justifyContent="space-between" $alignItems="center">
      <Table data={mapDataToColumns(reservationData)} />
      {selectedReservation && (
        <Modal title="상태 확인" modalId="statusModal">
          <FlexContainer $column $gap="16px">
            <Input label="시작일자" readOnly value={selectedReservation.startDate} />
            <Input label="종료일자" readOnly value={selectedReservation.endDate} />
            <Input label="신청일" readOnly value={selectedReservation.createdDate} />
            <Input label="예약자명" readOnly value={selectedReservation.name} />
            <Input label="전화번호" readOnly value={selectedReservation.phoneNumber} />
            <SelectList
              label="상태"
              value={statusOptions.find(option => option.value === selectedStatus)}
              options={statusOptions}
              onChange={handleStatusChange}
            />
          </FlexContainer>
        </Modal>
      )}
    </FlexContainer>
  );
};

export default Confirm;