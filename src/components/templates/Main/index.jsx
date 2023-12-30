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
      const formattedData = response.data.item
        .map(e => {
          return {
            startDate: e.startDate,
            endDate: e.endDate,
            endDate: dateFormat(`${e.endDate} 12:00:00`, 'yyyy-mm-dd hh:MM:ss'),
            // endDate: dateFormat(new Date(e.endDate).getTime() + 86400000, 'yyyy-mm-dd'),
            status: e.status.status,
            name: `${maskingName(e.name)} - ${e.status.description}`,
            allDay: true,
          };
        })
        .filter(e => e.status === 1 || e.status === 2)
        .sort((a, b) => {
          if (a.status > b.status) {
            return -1;
          }
          if (a.status < b.status) {
            return 1;
          }
          return 0;
        });

      setEvents(formattedData);
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

  const handleSelect = ({ slots }) => {
    // 드래그한 날짜 범위를 콘솔에 출력
    const formattedStart = dateFormat(slots[0], 'yyyy-mm-dd');
    const formattedEnd = dateFormat(slots[1], 'yyyy-mm-dd');
    // const formattedEnd = dateFormat(new Date(end - 1000), 'yyyy-mm-dd');
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
