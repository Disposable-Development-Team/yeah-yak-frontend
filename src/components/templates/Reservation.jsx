import Button from "@atoms/Button";
import Input from "@atoms/Input";
import Paragraph from "@atoms/Paragraph";

export default function Reservation() {
  return (
    <div>
      <div>
        <Paragraph size="24px" weight="bold">예약하기</Paragraph>
        <Paragraph size="24px" weight="bold">합주실</Paragraph>
      </div>
      <div>
        <Paragraph size="12px">시작일</Paragraph>
        <Input hasInput={true} isReadOnly={false} placeholder="YYYY-MM-DD"/>
        <Paragraph size="12px">종료일</Paragraph>
        <Input hasInput={true} isReadOnly={false} placeholder="YYYY-MM-DD"/>
      </div>
      <div>
        <Input hasInput={true} isReadOnly={false} placeholder="예약자명" />
      </div>
      <div>
        <Input hasInput={true} isReadOnly={false} placeholder="전화번호" />
      </div>
      <div>
        <Button>신청</Button>
      </div>
    </div>
  )
  ;
}