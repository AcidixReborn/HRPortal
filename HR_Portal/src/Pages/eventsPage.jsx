import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const EventsPage = () => {
  const [events, setEvents] = useState([
    { title: 'Vacation - John', date: '2025-10-25' },
    { title: 'Meeting - HR', date: '2025-10-27' },
    { title: 'Appointment - Coach', date: '2025-11-01' },
  ]);

  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Team Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        height="auto"
      />
    </div>
  );
};

export default EventsPage;