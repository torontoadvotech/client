import "./viewSessionInfo.modal.scss";

import React from "react";

import Modal from "../../components/Modal/Modal";
import API from "../../lib/API";
import { Session, UserType } from "../../lib/types";

interface viewSessionInfoModalProps {
  onClose(): void;
  session: Session;
  otherUser: UserType;
}

export const viewSessionInfoModal: React.FC<viewSessionInfoModalProps> = ({
  session,
  otherUser,
  onClose,
}) => {
  const formattedDate = new Date(session.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Modal
      onClose={onClose}
      title="Session Information"
      className="session-view-modal"
    >
      <div className="session-modal--img-container">
        <img
          src="https://dummyimage.com/100x100/ffffff/0011ff"
          alt={`${otherUser.name}'s profile image`}
          className="session-modal--profile-image"
        />
      </div>
      <div className="session-modal--details">
        <h4>{otherUser.name}</h4>
        <span className="session-modal--date">{formattedDate}</span>
      </div>
      <div className="session-modal--response">
        <button className="session-modal--response__approve">Accept</button>
        <div className="session-modal--response__reject">Reject</div>
      </div>
    </Modal>
  );
};
