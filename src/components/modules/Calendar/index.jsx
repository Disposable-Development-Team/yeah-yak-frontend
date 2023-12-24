import React from 'react';
import { Calendar as Cal, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

const localizer = momentLocalizer(moment);
const format = {
  selectRangeFormat: {
    backgroundColor: '#014034', // 배경색
    borderRadius: '0px', // 테두리 반경
    opacity: 0.5, // 투명도
  },
};

const CalendarContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const StyledCalendar = styled(Cal)`
  .rbc-toolbar {
    justify-content: center;
    margin-bottom: 1rem;

    .rbc-toolbar-label {
      flex-grow: unset;
      font-size: 1.7rem;
      line-height: 1;
    }

    .rbc-btn-group {
      display: flex;
      align-items: center;
    }
  }

  .rbc-month-header {
    height: 32px;
  }

  .rbc-header {
    line-height: 32px;
    font-weight: 400;
  }

  .rbc-month-row {
    display: inline-table !important;
    flex: 0 0 0 !important;
    min-height: 150px !important;
  }

  .rbc-event {
    background-color: #014034; // 배경색
  }

  .rbc-show-more {
    color: #014034;

    &:hover {
      color: #91d9c4;
    }
  }

  .rbc-selected-cell {
    box-shadow: 0 0 0 3px #014034 inset;
  }

  .rbc-date-cell {
    text-align: center;
    padding: 0.5rem;
  }

  .rbc-today {
    background-color: #91d9c456;
  }

  .rbc-button-link {
    font-family: 'Noto Sans KR', 'Roboto';
    font-size: 1rem;
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

function Toolbar(props) {
  const { date } = props;

  const navigate = action => {
    props.onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={navigate.bind(null, 'PREV')}>
          {'<'}
        </button>
        <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
        <button type="button" onClick={navigate.bind(null, 'NEXT')}>
          {'>'}
        </button>
      </span>
    </div>
  );
}

const Calendar = ({ onSelectSlot, ...props }) => {
  return (
    <CalendarContainer>
      <StyledCalendar
        localizer={localizer}
        startAccessor="startdate"
        endAccessor="enddate"
        selectable
        onSelectSlot={onSelectSlot}
        format={format}
        events={events}
        allDayMaxRows={0}
        view="month"
        views={['month']}
        components={{
          toolbar: Toolbar,
        }}
      />
    </CalendarContainer>
  );
};

export default Calendar;
