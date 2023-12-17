import { useState } from 'react';
import { FlexContainer, FlexItem } from '@atoms/Flex';

import Calendar from '@modules/Calendar';
import Reservation from '@templates/Reservation';
import { useModalContext } from '@modules/Modal/ModalContext';
import dateFormat from 'dateformat';

export default function Main() {
  const [values, setValues] = useState({
    startDate: '',
    endDate: '',
    name: '',
    phoneNumber: '',
  });

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
      // startDate: start,
      // endDate: end,
    });
    openModal();
  };

  return (
    <div>
      <FlexContainer $justifyContent="center" $alignItems="center" $gap="2rem">
        <FlexItem $flex="1 1 100%">
          <Calendar onSelectSlot={handleSelect} />
        </FlexItem>
      </FlexContainer>
      <Reservation values={values} onChange={handleChange}></Reservation>
    </div>
  );
}
