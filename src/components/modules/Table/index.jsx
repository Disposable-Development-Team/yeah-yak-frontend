// Table.js

import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  table-layout: fixed;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  background-color: #014034;
  color: #ffffff;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 12px 15px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-child(even) {
    background-color: #e6e6e6;
  }
  &:last-of-type {
    border-bottom: 2px solid #014034;
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
              <TableCell key={index}>{row[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
