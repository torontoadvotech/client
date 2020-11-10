import "./viewSessionInfo.modal.scss";

import React, { useEffect, useState } from "react";

import Modal from "../../components/Modal/Modal";
import { Session } from "../../lib/types";
import SessionCard from "../../components/SessionCard/SessionCard";
import API from "../../lib/API";
import { User } from "../../containers/user.container";

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
  const { user } = User.useContainer();
  const [sessionData, setSessionData] = useState<Session | null>(null);

  useEffect(() => {
    setSessionData({ ...session });
  }, [session]);

  const setSessionResponse = (response: boolean) => {
    API.approveSession(response, sessionData!._id, user!.token);
  };

  return (
    <Modal
      onClose={onClose}
      title="Session Information"
      className="session-view-modal"
    >
      <>
        {sessionData && <SessionCard session={sessionData} role={role} />}
        <div className="session-modal--response">
          {/* Only show approve/reject buttons for mentors and when the session is pending */
          user!.role === "mentor" &&
            session.confirmed === false &&
            session.rejected === false && (
              <>
                <button
                  className="session-modal--response__approve button-primary"
                  onClick={() => {
                    setSessionResponse(true);
                  }}
                >
                  Accept
                </button>
                <button
                  className="session-modal--response__reject button-secondary"
                  onClick={() => {
                    setSessionResponse(false);
                  }}
                >
                  Reject
                </button>
              </>
            )}
          {// Show cancel button for mentors and mentees when session is approved
          session.confirmed === true && (
            <button
              className="session-modal--response__reject button-secondary"
              onClick={() => {
                //TODO: Add cancel functionality
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </>
    </Modal>
  );
};

export default ViewSessionInfoModal;
