import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../containers/user.container";
import API from "../../lib/API";
import { Session } from "../../lib/types";
import SessionCard from "../../components/SessionCard/SessionCard";
import ViewSessionInfoModal from "../../modals/viewSessionInfo/viewSessionInfo.modal";

const ApplicationStatus = () => {
  const { user } = User.useContainer();
  const [sessions, setSessions] = useState<Session[]>();
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [showSessionModal, setShowSessionModal] = useState<boolean>(false);

  const accepted = false;
  // I don't know where we're getting the user's application status
  // so I just mocked it for now

  useEffect(() => {
    const loadSessions = async () => {
      let res;

      // Get sessions for the current user
      try {
        if (user) {
          res = await API.getMySessions(user.token);
        }

        setSessions(res.data.sessions);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      loadSessions();
    }
  }, [user, activeSession]);

  // Each application has a flag for 'rejected' and 'confirmed' or 'cancelled'
  // By filtering using these flags we can separate the applications out into "pending", "accepted", and "confirmed"
  const sortApplicationsByStatus = (
    rejected: boolean,
    confirmed: boolean,
    cancelled = false
  ) => {
    if (sessions) {
      return sessions.filter(
        (session) =>
          session.rejected === rejected &&
          session.confirmed === confirmed &&
          session.cancelled === cancelled
      );
    }

    return null;
  };

  const acceptedSessions = sortApplicationsByStatus(false, true);
  const pendingSessions = sortApplicationsByStatus(false, false);
  const rejectedSessions = sortApplicationsByStatus(true, false);

  return (
    <div className="application-container">
      {showSessionModal && activeSession && (
        <ViewSessionInfoModal
          onClose={() => setShowSessionModal(false)}
          session={activeSession}
          role={user!.role}
          updateActiveSession={(session: Session | null) => {
            setActiveSession(session);
          }}
        />
      )}
      {/* sessions should only appear if user has accepted status */}
      {!accepted ? null : (
        <div>
          <h2>Sessions</h2>
          {/* Accepted Applications Section */}
          <h3 className="application-container--heading">Accepted Sessions</h3>
          <div className="application-container application-container--accepted">
            {acceptedSessions && acceptedSessions.length > 0 ? (
              acceptedSessions.map((session) => (
                <SessionCard
                  key={uuidv4()}
                  session={session}
                  role={user!.role}
                  onClick={() => {
                    setShowSessionModal(true);
                    setActiveSession({ ...session });
                  }}
                />
              ))
            ) : (
              <p className="application-container--no-sessions">
                No accepted sessions
              </p>
            )}
          </div>
          {/* Pending Applications Section */}
          <h3 className="application-container--heading">Pending Sessions</h3>
          <div className="application-container application-container--pending">
            {pendingSessions && pendingSessions.length > 0 ? (
              pendingSessions.map((session) => (
                <SessionCard
                  key={uuidv4()}
                  session={session}
                  role={user!.role}
                  onClick={() => {
                    setShowSessionModal(true);
                    setActiveSession({ ...session });
                  }}
                />
              ))
            ) : (
              <p className="application-container--no-sessions">
                No pending sessions
              </p>
            )}
          </div>
          {/* Rejected Applications Section */}
          <h3 className="application-container--heading">Rejected Sessions</h3>
          <div className="application-container application-container--rejected">
            {rejectedSessions && rejectedSessions.length > 0 ? (
              rejectedSessions.map((session) => (
                <SessionCard
                  key={uuidv4()}
                  session={session}
                  role={user!.role}
                  onClick={() => {
                    setShowSessionModal(true);
                    setActiveSession({ ...session });
                  }}
                />
              ))
            ) : (
              <p className="application-container--no-sessions">
                No rejected sessions
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;
