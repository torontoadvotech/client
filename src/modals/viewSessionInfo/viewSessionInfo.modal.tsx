import "./viewSessionInfo.modal.scss";

import React, { useEffect, useState } from "react";

import Modal from "../../components/Modal/Modal";
import { Session } from "../../lib/types";
import SessionCard from "../../components/SessionCard/SessionCard";

interface viewSessionInfoModalProps {
  onClose(): void;
  session: Session;
  role: "mentor" | "mentee";
}

const ViewSessionInfoModal: React.FC<viewSessionInfoModalProps> = ({
  session,
  role,
  onClose,
}) => {
  const [sessionData, setSessionData] = useState<Session | null>(null);

  useEffect(() => {
    setSessionData({ ...session });
  }, [session]);

  return (
    <Modal
      onClose={onClose}
      title="Session Information"
      className="session-view-modal"
    >
      <>
        {sessionData && <SessionCard session={sessionData} role={role} />}
        <div className="session-modal--response">
          <button className="session-modal--response__approve">Accept</button>
          <button className="session-modal--response__reject">Reject</button>
        </div>
      </>
    </Modal>
  );
};

export default ViewSessionInfoModal;
