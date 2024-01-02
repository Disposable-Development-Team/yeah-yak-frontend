import React from 'react';
import { Calendar as Cal, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

const localizer = momentLocalizer(moment);

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

  .rbc-show-more {
    color: #014034;
    background-color: #ffffff00;

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

const dayPropGetter = date => {
  return {
    className: `day-${date.getDay()}`,
  };
};

function eventPropGetter(event, start, end, isSelected) {
  const backgroundColor = event.status === 2 ? '#014034' : '#e6e6e6';
  const color = event.status === 2 ? '#fff' : '#999999';
  const style = {
    fontFamily: 'Noto Sans KR',
    backgroundColor: backgroundColor,
    borderRadius: '0px',
    color: color,
    border: '0px',
    display: 'block',
    outline: 'none',
  };
  return {
    style: style,
  };
}

const Calendar = ({ onSelectSlot, events, ...props }) => {
  return (
    <CalendarContainer>
      <StyledCalendar
        localizer={localizer}
        startAccessor="startDate"
        endAccessor="endDate"
        titleAccessor="name"
        selectable
        onSelectSlot={onSelectSlot}
        events={events}
        eventPropGetter={eventPropGetter}
        dayPropGetter={dayPropGetter}
        popup
        views={['month']}
        components={{
          toolbar: Toolbar,
        }}
      />
    </CalendarContainer>
  );
};

export default Calendar;
