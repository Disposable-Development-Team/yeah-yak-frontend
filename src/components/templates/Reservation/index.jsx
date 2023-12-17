import Button from '@atoms/Button';
import { FlexContainer } from '@atoms/Flex';
import Input from '@atoms/Input';
import Form from '@modules/Form';
import Modal from '@modules/Modal';

export default function Reservation({ values, onChange }) {
  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Modal title={'예약하기'} width={'80%'}>
      <Form submitHandler={handleSubmit}>
        <FlexContainer $noWrap $gap="0" $justifyContent="space-evenly">
          <Input type="date" label="시작일" value={values.startDate} onChange={onChange} readOnly />
          <Input type="date" label="종료일" value={values.endDate} onChange={onChange} readOnly />
        </FlexContainer>
        <FlexContainer $noWrap $gap="0" $justifyContent="space-evenly">
          <Input label="예약자명" name="name" value={values.name} onChange={onChange} />
          <Input label="전화번호" name="phoneNumber" value={values.phoneNumber} onChange={onChange} />
        </FlexContainer>
        <FlexContainer $justifyContent="flex-end">
          <Button type="submit">신청</Button>
        </FlexContainer>
        <div>{JSON.stringify(values)}</div>
      </Form>
    </Modal>
  );
}
