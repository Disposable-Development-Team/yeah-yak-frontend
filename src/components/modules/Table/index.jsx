// Table.js

import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  margin: 16px 0;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Table = ({ data }) => {
  if (!data) {
    return null;
  }
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <TableWrapper>
      <thead>
        <TableRow>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header, index) => (
              <TableCell key={index}>{typeof row[header] !== 'object' ? row[header] : ''}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
