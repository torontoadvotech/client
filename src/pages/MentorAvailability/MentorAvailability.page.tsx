import React, { useEffect, useState } from 'react';
import MentorCard from '../../components/MentorCard/MentorCard';
import { v4 as uuidv4 } from 'uuid';
import API from '../../lib/API';
import { UserType } from '../../lib/types';
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'; 
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventInput } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid';
import TimeSelection from "./TimeSelection";

import './mentorAvailability.scss';
import { Link } from 'react-router-dom';

const MentorAvailability = () => {
  // const [mentors, setMentors] = useState<UserType[]>([]);
  // const [page, setPage] = useState<number>(1);
  // const [lastPage, setLastPage] = useState<number>();
    const [isDateSelected, setIsDateSelected] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date|string>('');

  // useEffect(() => {
  //   const getMentors = async (page: number, limit: number) => {
  //     const res = await API.getAllMentors(page, limit);

  //     setMentors([...mentors, ...res.data.data]);

  //     // Calculate and store last page so load more button can be hidden
  //     // if there are no more mentors to fetch
  //     setLastPage(Math.ceil(res.count / limit));
  //   };

  //   const limit = 8;

  //   getMentors(page, limit);
  // }, [page]);
  
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    console.log(selectInfo);
    console.log(selectInfo.start);
    setSelectedDate(selectInfo.start);
    console.log(selectedDate, 'selectedDate');
    setIsDateSelected(true);
    // let calendarApi = selectInfo.view.calendar;
    // calendarApi.unselect() // clear date selection
  }

  return (
    <main className='mentor-availability-page'>
      <div className='profile-summary'>
        <button className="back-btn"><Link to="/profile">Back</Link></button>
        <div className="card">
        <h1>Set Your <span>Availability</span></h1>
        <p>Let your mentees know your availability.</p>
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        // headerToolbar={false}
        headerToolbar={{
          // left: "myCustomButton prev,today,next",
          left: "prev",
          center: "title",
          right: "next"
        }}
        // buttonText={{
        //   today: "current",
        //   month: "month",
        //   week: "week",
        //   day: "day",
        //   list: "list"
        // }}
        initialView="dayGridMonth"
        selectable={true}
        // events={INITIAL_EVENTS}
        select={handleDateSelect}
        // eventClick={handleEventClick}
        // eventContent={renderEventContent}
      />
        {!isDateSelected? null: <TimeSelection selectedDate={selectedDate}/>}   
        
        <p className="bottom-text">You can update this information later on your account</p>
      </div>
      </div>
    </main>
  );




};

export default MentorAvailability;
