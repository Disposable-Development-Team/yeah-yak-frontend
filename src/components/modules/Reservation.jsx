export default function Reservation() {
  const SelectBox = () => {
    return (
      <select>
        <option key="" value=""></option>
        <option key="" value="">1층 J4</option>
        <option key="" value="">3층 소회의실</option>
        <option key="" value="">기업지원허브</option>
      </select>
    );
  };

  return (
    <div>
      <h1>예약하기</h1>
      <div>
        <b>이름</b><input />
      </div>
      <div>
        <b>시작일자</b><input type="date"></input>
      </div>
      <div>
        <b>종료일자</b><input type="date"></input>
      </div>
      <div>
        <b>예약장소</b><SelectBox />
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