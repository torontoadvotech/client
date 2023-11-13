import React, { useEffect, useState } from 'react';
import { Session } from "../../lib/types";
import API from '../../lib/API';
import { User } from '../../containers/user.container';

import "./sessionCard.scss";
import ConfirmModal from './ConfirmModal';

interface Props {
  session: Session;
  role: "mentor" | "mentee";
  onClick?: () => void;
}

const SessionCard = ({ session, role, onClick }: Props) => {
  // Each session has data for the mentor and mentee
  // Get user data for the complementary role
  const oppositeRole = role === "mentor" ? "mentee" : "mentor";
  const otherUser = session[oppositeRole];

  console.log(session, role, 'session');



  // format dates as eg. Sunday February 24, 2020
  const formattedDate = new Date(session.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [
    isModalOpen,
    setIsModalOpen,
] = useState<boolean>(false);

const [
  status,
  setStatus,
] = useState<string>('');


const closeModal = () => {
  setIsModalOpen(false);
}

const openModal = (status:string) => {
  setIsModalOpen(true);
  setStatus(status);
}

const takeAction = (action:string) => {
  console.log(action);
  setIsModalOpen(false);
}

const { user } = User.useContainer();
const [sessionData, setSessionData] = useState<Session | null>(null);

useEffect(() => {
  setSessionData({ ...session });
}, [session]);

const setSessionResponse = async (response: boolean) => {
  const res = await API.approveSession(
    response,
    sessionData!._id,
    user!.token
  );

  // updateActiveSession(res.session);
};

const cancelSession = async () => {
  await API.cancelSession(sessionData!._id, user!.token);
};

  return (
    <>
    <div className="session-card">
      <div className="session-card--img-container">
        <img
          src="https://dummyimage.com/200x200/ffffff/0011ff"
          alt={`${otherUser.name}'s profile image`}
          className="session-card--profile-image"
        />
      </div>
      <div className="session-card--details">
        <h4>{otherUser.name}</h4>
        <span className="session-card--date">{formattedDate}</span>
        {session?.rejected && role === "mentor" ? <p className="rejected-line">Looks like {otherUser.name} had to cancel. They may reschedule later.</p> : null}
        {!session?.rejected ? 
          session?.confirmed ?
            <div className="confirm-btns"><p role="button" tabIndex={0} onClick={()=>openModal("cancel")}>Cancel</p></div>
            :
            role === "mentor" ? (<div className="confirm-btns"><p role="button" tabIndex={0} onClick={()=>openModal("confirm")}>Confirm</p><p role="button" tabIndex={0} onClick={()=>openModal("reject")}>Reject</p></div>) : null
          : null
        }
       
      </div>
    </div>
    {isModalOpen && <ConfirmModal onClose={closeModal} status={status} takeAction={takeAction}/>}</>
  );
};

export default SessionCard;
