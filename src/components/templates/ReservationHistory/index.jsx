// TableWithApi.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@modules/Table';
import Button from '@atoms/Button';
import { darken, lighten } from 'polished';
import Header from '@modules/Header';
import { FlexContainer, FlexItem } from '@atoms/Flex';
import { useLocation } from 'react-router';
import { SERVER_HOST } from '@config/config';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  /* Additional styles based on the status prop */
  ${({ $status, theme }) => {
    if ($status === 1 || $status === 2) {
      const selectedColor = theme.colors.red;

      return `
      &:hover {
        background: ${lighten(0.1, selectedColor)};
        &::after {
            content: "[취소]";
          }
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
        &::after {
            content: "[취소]";
          }
      }

      color: white;
    `;
    }

    return `
    pointer-events:none;
    filter: opacity(30%);
    `;
  }}
`;

const cancelReservation = async id => {
  try {
    if (window.confirm('해당 예약을 취소하시겠습니까?')) {
      const response = await axios.post(`http://${SERVER_HOST}/reservations/${id}`, {
        status: 3,
      });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default function ReservationHistory(props) {
  const { state } = useLocation();
  const { data, name, phoneNumber } = state;

  const [reservationData, setReservationData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${SERVER_HOST}/reservations?name=${name}&phoneNumber=${phoneNumber}`);
      const data = response.data.item.map(e => {
        return {
          신청일: e.createdDate,
          시작일자: e.startDate,
          종료일자: e.endDate,
          상태: (
            <CustomButton
              $status={e.status.status}
              onClick={async () => {
                await cancelReservation(e.id);
                fetchData();
              }}
            >
              {e.status.description}
            </CustomButton>
          ),
        };
      });
      setReservationData(data);
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
      <Table data={reservationData} />
    </FlexContainer>
  );
}
