import Input from "@atoms/Input";
import Button from "@atoms/Button";

export default function Alert() {
  return(
    <div>
      <div>
        <Input hasInput={true} isReadOnly={true} value="정보입력" />
      </div>
      <div>
        <Input hasInput={true} isReadOnly={false} placeholder="예약자명" />
      </div>
      <div>
        <Input hasInput={true} isReadOnly={false} placeholder="전화번호" />
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}