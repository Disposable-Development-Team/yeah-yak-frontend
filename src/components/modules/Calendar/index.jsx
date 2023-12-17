import React, { useState } from 'react';
import { Calendar as Cal, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import styled from 'styled-components';

const localizer = momentLocalizer(moment);
const format = {
  selectRangeFormat: {
    backgroundColor: 'rgba(0, 123, 255, 0.25)', // 배경색
    borderRadius: '0px', // 테두리 반경
    opacity: 0.5, // 투명도
  },
};

const StyledCalendar = styled(Cal)`
  .rbc-month-row {
    display: inline-table !important;
    flex: 0 0 0 !important;
    min-height: 80px !important;
  }
  .rbc-selected-cell {
    box-shadow: 0 0 0 3px #91d9c4 inset;
  }
`;

const events = [
  {
    createdDate: '2023-12-13T01:00:04.845105',
    modifiedDate: '2023-12-13T03:36:31.720535',
    id: 1,
    name: 'kim2',
    title: 'kim2 - 010-8424-1801',
    room: '1',
    phonenumber: '010-8424-1801',
    startdate: '2023-12-02',
    enddate: '2023-12-15',
    status: 2,
  },
  {
    createdDate: '2023-12-13T22:50:42.756391',
    modifiedDate: '2023-12-13T22:50:42.756391',
    id: 3,
    name: 'Song',
    title: 'Song - 010-2862-7686',
    room: '1',
    phonenumber: '010-2862-7686',
    startdate: '2023-12-08',
    enddate: '2023-12-19',
    status: 1,
  },
  {
    createdDate: '2023-12-13T22:50:42.756391',
    modifiedDate: '2023-12-13T22:50:42.756391',
    id: 4,
    name: 'Song',
    title: 'Song - 010-2862-7686',
    room: '1',
    phonenumber: '010-2862-7686',
    startdate: '2023-12-08',
    enddate: '2023-12-19',
    status: 1,
  },
  {
    createdDate: '2023-12-13T22:50:42.756391',
    modifiedDate: '2023-12-13T22:50:42.756391',
    id: 2,
    name: 'Song',
    title: 'Song - 010-2862-7686',
    room: '1',
    phonenumber: '010-2862-7686',
    startdate: '2023-12-08',
    enddate: '2023-12-19',
    status: 1,
  },
];

const Calendar = ({ onSelectSlot, ...props }) => {
  return (
    <div>
      <StyledCalendar
        localizer={localizer}
        startAccessor="startdate"
        endAccessor="enddate"
        selectable
        onSelectSlot={onSelectSlot}
        format={format}
        events={events}
      />
    </div>
  );
};

export default Calendar;
