import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../../lib/API';
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventInput } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid';

import { UserType } from '../../lib/types';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './mentorProfile.scss';
import Modal from '../../components/Modal/Modal';
import SendInvitationsModal from './SendInvitationsModal';
import { useHistory } from 'react-router-dom';

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
console.log(todayStr);
 function createEventId() {
  return String(eventGuid++)
}

const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: createEventId(),
  //   title: 'Time 0',
  //   start: todayStr + 'T12:00:00',
  //   display: 'background',
  //   allDay: true,
  // },
  {
    id: createEventId(),
    title: 'Date available',
    start: '2023-12-25'  + 'T12:00:00',
    display: 'background',
    allDay: true,
    extendedProps: {
      timeSlots: [['9:00am EST', '12:00pm EST'], ['12:00pm EST', '3:00pm EST'], ['3:00pm EST', '5:00pm EST']]
    },
  },
  // {
  //   id: createEventId(),
  //   title: 'Available 2',
  //   start: '2023-05-22'  + 'T12:00:00',
  //   display: 'background',
  //   // allDay: true,
  // },
  {
    id: createEventId(),
    title: 'Date available',
    start: '2023-12-30' + 'T12:00:00',
    display: 'background',
    allDay: true,
    extendedProps: {
      timeSlots: [['9:00am EST', '12:00pm EST'], ['3:00pm EST', '5:00pm EST']]
    },
  },

]

interface ParamTypes {
  mentorId: string;
}

interface stateType {
  from: { pathname: string }
  user: UserType
}



const MentorProfilePage = () => {
  const history = useHistory();
  // const { user = 'defaultValue' } = location.state || {}
  const { mentorId } = useParams<ParamTypes>();
  const [mentor, setMentor] = useState<UserType>();
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [selectedTimeslots, setSelectedTimeslots] = useState<any>([]);
  const [areInvitationsSent, setAreInvitationsSent] = useState<boolean>(false);

  useEffect(() => {
    const loadMentor = async () => {
      try {
        let res = await API.getOneMentor(mentorId);
        console.log(res, 'loadMentor');
        // const mockRes = {};
        // res = mockRes;
        if (res.data) {
          setMentor(res.data.data);
        }

      } catch (error) {
        console.error(error);
      }
    };

    loadMentor();
  }, []);

  const { state } = useLocation<stateType>();

  // console.log("STATE", state);
  const firstName = state.user?.name.split(" ")[0]

  const bookMeeting = (mentor:UserType) => {
    setIsBooking(true);
  }

  const closeModal = () => {
    setAreInvitationsSent(false);
    history.push("/profile");
  }


  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: "1",
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const selectSlot = (selectedDay:any, timeslot:any) => {
    const newId = `${selectedDay.id}${timeslot[0].split(' ')[0]}`;
    const processedTimeslot = { ...selectedDay, selectedTimeslot: timeslot, id: newId};
    if (selectedTimeslots.length === 0){
      setSelectedTimeslots([processedTimeslot]);
    } else {
      const newSelectedSlots:any[] = [...selectedTimeslots];
      const found = selectedTimeslots.find((selectedTimeslot:any) => {
        return selectedTimeslot.id === newId;
      });

      if (!found) {
        newSelectedSlots.push(processedTimeslot);
        if (newSelectedSlots.length > 3) {
          alert("You cannot book more than 3 sessions. Please consider removing some sessions.")
        } else {
          setSelectedTimeslots(newSelectedSlots);
        }
      }
    }
  }

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = { id: clickInfo.event.id, start: clickInfo.event.start, title: clickInfo.event.title, timeSlots: clickInfo.event.extendedProps.timeSlots  };
    setSelectedDay(event);
  }

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    )
  }

  const getEvents = () =>{
   return [{
      id: createEventId(),
      title: "Long Event",
      start: '2023-05-07T10:00:00',
      end: '2023-05-10T16:00:00',
      // Non-standard property below
    }]
    }

    const removeTimeslot = (slotToRemove:any)=> {
      const newSelectedSlots = selectedTimeslots.filter((timeslot:any)=>{
        if (slotToRemove.id !== timeslot.id) {
          return timeslot;
        }
      })
      setSelectedTimeslots(newSelectedSlots);
    }

   const t1 = 0;

   const handleSendInvitations = () => {
    setAreInvitationsSent(true);
   }

  //  <h2 className="timeslot-heading">Time</h2><p>Select all that apply.</p>

  return ( 
     <main className='mentor-profile-page'>
      {isBooking ? 
      // margin-bottom: 55px;
      <div className='calendar-schedule'>
        <h1><span>Schedule Your </span>First Meeting</h1>
        <p> Select all dates and times from {state.user?.name}'s availability</p>
        {/* <h2>Select Date & Time</h2> */}
        {/* <p className="select-text">Select all that apply.</p> */}
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
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
        // initialEvents={INITIAL_EVENTS} 
        events={INITIAL_EVENTS}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
      />
        {selectedDay ? <div className="time-slots"><div className="displayed-events-container">
        {selectedDay.timeSlots.map((timeslot:any)=> {
            return (<div className="event-box" role="button" tabIndex={t1} onClick={()=>selectSlot(selectedDay, timeslot)}> 
            <p>{timeslot[0]}</p>
            <p>to</p>
            <p>{timeslot[1]}</p>
          </div>);
        })}
        </div></div> : null}

        {selectedTimeslots.length > 0 ? <div className="time-slots">
        <h2 className="timeslot-heading">Selected Dates</h2>
          {selectedTimeslots?.map((timeslot:any)=> {
            const convertedDate = new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'full',
              timeZone: 'America/Toronto',
            }).format(timeslot.start);
            return (<div className="selected-slot">
              <p>{convertedDate} at {timeslot.selectedTimeslot[0]}</p>
              <div className="modal-close" onClick={()=> removeTimeslot(timeslot)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>)
        })}

          <div className="book-session">
            <p>You are booking 2-hour mentorship session(s) with {state.user?.name}</p>
            <p></p>
            {/* <h2>Book a 2-hour <br/>mentorship session</h2> */}
            {/* <p className="mentor-name-btn"><span className="span-cirle"></span>{state.user?.name}</p> */}
            <button className="button button-primary book-meeting send-invitation" onClick={handleSendInvitations}>Send Invitation(s)</button>
          </div>
        </div> : null}
      </div>: 
      <React.Fragment><h1>Mentor Profile</h1>
      <div className='profile-summary'>
        <div className='profile-summary--img-container'>
          <img
            src='https://picsum.photos/280/300'
            alt={`${state.user?.name}'s profile image`}
            className='profile-summary--img'
          />
        </div>
        <div className='profile-summary--details'>
          <h2 className='mentor-name'>{state.user?.name}</h2>
          <span className='mentor-email'>{state.user?.email}</span>
          <button
            className='button button-primary book-meeting'
            onClick={() => bookMeeting(state.user)}
          >
            Book a Call with {firstName}
          </button>
        </div>
      </div>
      <div className='mentor-profile-bio'>
        <h2 className='secondary-heading'>Bio</h2>
        <p>{state.user?.bio}</p>
      </div>
      <div className='mentor-profile-skills'>
        <h2 className='secondary-heading'>Skills</h2>
        <ul>
          <li>HTML 5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Interviews</li>
          <li>Technical Interviews</li>
        </ul>
      </div>
      <div className='mentor-profile-calendar'>
        <h2 className='calendar-heading'>Calendar Snapshot</h2>
        <div className='calendar-container'>
          <p className='calendar-top-row'> &lt; December 2023 &gt;</p>
          <div className='calendar-row'>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
          <div className='calendar-row'>
            <p></p>
            <p></p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div className='calendar-row'>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p className="tag">10</p>
            <p>11</p>
            <p>12</p>
          </div>
          <div className='calendar-row'>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
          </div>
          <div className='calendar-row'>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p className="tag">23</p>
            <p className="tag">24</p>
            <p>25</p>
            <p>26</p>
          </div>
          <div className='calendar-row'>
            <p>27</p>
            <p>28</p>
            <p>29</p>
            <p>30</p>
            <p>31</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      </React.Fragment>
      }
      {areInvitationsSent && <SendInvitationsModal onClose={closeModal} invitations={selectedTimeslots} />}
      </main>
      
    
  );
};

export default MentorProfilePage;
