import { useState, useEffect } from 'react';
import { FlexContainer, FlexItem } from '@atoms/Flex';

import Calendar from '@modules/Calendar';
import Reservation from '@templates/Reservation';
import { useModalContext } from '@modules/Modal/ModalContext';
import dateFormat from 'dateformat';
import Header from '@modules/Header';
import Image from '@atoms/Image';
import axios from 'axios';
import { SERVER_HOST } from '@config/config';
import { maskingName } from 'utils/utils';

export default function Main() {
  const [values, setValues] = useState({
    startDate: '',
    endDate: '',
    name: '',
    phoneNumber: '',
  });

  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${SERVER_HOST}/reservations?`);
      const formattedData = response.data.item.map(e => {
        return {
          startDate: e.startDate,
          endDate: e.endDate,
          status: e.status.status,
          name: maskingName(e.name),
        };
      });
      const displayData = formattedData.filter(e => e.status === 2 || e.status === 5);
      setEvents(displayData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const { modalOpen, openModal, closeModal } = useModalContext();

  const handleSelect = ({ start, end }) => {
    // 드래그한 날짜 범위를 콘솔에 출력
    console.log('Selected range:', start, end);
    const formattedStart = dateFormat(start, 'yyyy-mm-dd');
    const formattedEnd = dateFormat(new Date(end - 1000), 'yyyy-mm-dd');
    setValues({
      ...values,
      startDate: formattedStart,
      endDate: formattedEnd,
    });
    openModal('reservation');
  };

  return (
    <div>
      <FlexContainer $justifyContent="center" $alignItems="center" $gap="2rem">
        <FlexItem $flex="1 1 100%">
          <Header />
        </FlexItem>
        <FlexItem $flex="1 1 100%">
          <Calendar onSelectSlot={handleSelect} events={events} />
        </FlexItem>
      </FlexContainer>
      <Reservation values={values} onChange={handleChange} onClose={fetchData}></Reservation>
    </div>
  );
}
