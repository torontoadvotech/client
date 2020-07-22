import React, { useEffect, useState } from 'react';
import { User } from '../../containers/user.container';
import API from '../../lib/API';
import { Session } from '../../lib/types';
import SessionCard from '../../components/SessionCard/SessionCard';

const ApplicationStatus = () => {
  const { user } = User.useContainer();
  const [sessions, setSessions] = useState<Session[]>();

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

  // Each application has a flag for 'rejected' and 'confirmed'
  // By filtering using these flags we can separate the applications out into "pending", "accepted", and "confirmed"
  const sortApplicationsByStatus = (rejected: boolean, confirmed: boolean) => {
    if (sessions) {
      return sessions.filter(
        session =>
          session.rejected === rejected && session.confirmed === confirmed
      );
    }
  };

  const acceptedSessions = sortApplicationsByStatus(false, true);
  const pendingSesssions = sortApplicationsByStatus(false, false);
  const rejectedSessions = sortApplicationsByStatus(true, false);

  return (
    <div className="application-container">
      <h3 className="application-container--heading">Accepted Applications</h3>
      <div className="application-container application-container--accepted">
        {acceptedSessions && acceptedSessions.length > 0 ? (
          acceptedSessions.map(session => (
            <SessionCard session={session} role={user!.role} />
          ))
        ) : (
          <p className="application-container--no-sessions">
            No accepted sessions
          </p>
        )}
      </div>
      <h3 className="application-container--heading">Pending Applications</h3>
      <div className="application-container application-container--pending">
        {pendingSesssions && pendingSesssions.length > 0 ? (
          pendingSesssions.map(session => (
            <SessionCard session={session} role={user!.role} />
          ))
        ) : (
          <p className="application-container--no-sessions">
            No pending applications
          </p>
        )}
      </div>
      <h3 className="application-container--heading">Rejected Applications</h3>
      <div className="application-container application-container--rejected">
        {rejectedSessions && rejectedSessions.length > 0 ? (
          rejectedSessions.map(session => (
            <SessionCard session={session} role={user!.role} />
          ))
        ) : (
          <p className="application-container--no-sessions">
            No rejected sessions
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplicationStatus;
