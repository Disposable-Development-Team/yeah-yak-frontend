// TableUtils.js
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

// Utils 함수: 컬럼 헤더 생성
export const generateTableHeaders = data => {
  const keys = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <TableRow>
      {keys.map(key => (
        <TableHeader key={key}>{key}</TableHeader>
      ))}
    </TableRow>
  );
};

// Utils 함수: 테이블 데이터 렌더링
export const renderTableData = data => {
  return data.map((item, index) => (
    <TableRow key={index}>
      {Object.values(item).map((value, index) => (
        <TableCell key={index}>{value}</TableCell>
      ))}
    </TableRow>
  ));
};
