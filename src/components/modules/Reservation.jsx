export default function Reservation() {
  return (
    <div>
      <h1>예약하기</h1>
      <div>
        <b>이름</b><input />
      </div>
      <div>
        <b>시작일자</b><input />
      </div>
      <div>
        <b>종료일자</b><input />
      </div>
      <div>
        <b>예약장소</b><input />
      </div>
      <div>
        <b>전화번호</b><input />
      </div>
      <div>
        <button>신청</button>
      </div>
    </div>
  );
}