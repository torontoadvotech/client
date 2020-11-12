import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../containers/user.container';
import API from '../../lib/API';
import { Session } from '../../lib/types';
import SessionCard from '../../components/SessionCard/SessionCard';
import ViewSessionInfoModal from '../../modals/viewSessionInfo/viewSessionInfo.modal';

const ApplicationStatus = () => {
  const { user } = User.useContainer();
  const [sessions, setSessions] = useState<Session[]>();
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [showSessionModal, setShowSessionModal] = useState<boolean>(false);

  const loadSessions = async () => {
    let res;

    // Get sessions for the current user
    try {
      if (user) {
        res = await API.getMySessions(user.token);
      }

      console.log(res.data.sessions);

      setSessions(res.data.sessions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      loadSessions();
    }
  }, [user]);

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
    <div className='application-container'>
      {showSessionModal && activeSession && (
        <ViewSessionInfoModal
          onClose={() => setShowSessionModal(false)}
          session={activeSession}
          role={user!.role}
        />
      )}
      {/* Accepted Applications Section */}
      <h3 className='application-container--heading'>Accepted Applications</h3>
      <div className='application-container application-container--accepted'>
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
          <p className='application-container--no-sessions'>
            No accepted sessions
          </p>
        )}
      </div>
      {/* Pending Applications Section */}
      <h3 className='application-container--heading'>Pending Applications</h3>
      <div className='application-container application-container--pending'>
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
          <p className='application-container--no-sessions'>
            No pending applications
          </p>
        )}
      </div>
      {/* Rejected Applications Section */}
      <h3 className='application-container--heading'>Rejected Applications</h3>
      <div className='application-container application-container--rejected'>
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
          <p className='application-container--no-sessions'>
            No rejected sessions
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplicationStatus;
