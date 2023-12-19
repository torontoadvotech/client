import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { User } from "../../containers/user.container";
import API from "../../lib/API";
import { Session } from "../../lib/types";
import SessionCard from "../../components/SessionCard/SessionCard";
import ViewSessionInfoModal from "../../modals/viewSessionInfo/viewSessionInfo.modal";

interface Props {
  accepted: boolean;
}

const ApplicationStatus = ({ accepted }: Props) => {
  const { user } = User.useContainer();
  const [sessions, setSessions] = useState<Session[]>();
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [showSessionModal, setShowSessionModal] = useState<boolean>(false);

  useEffect(() => {
    const loadSessions = async () => {
      let res;

      // Get sessions for the current user
      try {
        if (user) {
          res = await API.getMySessions(user.token);
          console.log(res, "getMySessions");
          res = {
            "status": "success",
            "data": {
                "sessions": [
                    {
                        "requestedAt": "2020-05-08T03:10:10.132Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5eb4d5a54061c3042c2bbc5f",
                        "date": "2020-03-25T03:41:54.989Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-05-08T03:10:10.132Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": false,
                        "_id": "5eb4d5ee4061c3042c2bbc60",
                        "date": "2020-05-08T03:45:44.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791fe",
                            "name": "Diana Prince",
                            "email": "dprince@gmail.com",
                            "photo": "photo8.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-05-08T03:10:10.132Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5eb4d6284061c3042c2bbc61",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f8",
                            "name": "Jessica Jones",
                            "email": "jjones@gmail.com",
                            "photo": "photo2.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": true,
                        "cancelled": false,
                        "_id": "5fadc852fd89a80aabe2be35",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadc854fd89a80aabe2be36",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadc855fd89a80aabe2be37",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadc856fd89a80aabe2be38",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": true,
                        "cancelled": false,
                        "_id": "5fadc857fd89a80aabe2be39",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": true,
                        "cancelled": false,
                        "_id": "5fadc859fd89a80aabe2be3a",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadcdabfd89a80aabe2be3b",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadcdf2fd89a80aabe2be3c",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadce46fd89a80aabe2be3d",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadce69fd89a80aabe2be3e",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadce6afd89a80aabe2be3f",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadce6bfd89a80aabe2be40",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": true,
                        "cancelled": false,
                        "_id": "5fadce6cfd89a80aabe2be41",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    },
                    {
                        "requestedAt": "2020-11-12T22:52:36.126Z",
                        "confirmed": false,
                        "rejected": false,
                        "cancelled": true,
                        "_id": "5fadd86dfd89a80aabe2be42",
                        "date": "2020-05-08T03:42:24.673Z",
                        "mentor": {
                            "_id": "5e85365528f22e04b76791f7",
                            "name": "Thor Odinson",
                            "email": "thor@asgard.com",
                            "photo": "photo1.jpg"
                        },
                        "mentee": {
                            "_id": "5e85365528f22e04b7679203",
                            "name": "Steve Rogers",
                            "email": "srogers@gmail.com",
                            "photo": "https://torontoadvotech.blob.core.windows.net/5e85365528f22e04b7679203/profile-picture-1595999551616-5e85365528f22e04b7679203.jpeg",
                            "pronouns": "He / Him"
                        },
                        "__v": 0
                    }
                ]
            }
        };
        }

        setSessions(res?.data.sessions);
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
          <h2 className="sessions">Sessions</h2>
          {/* Accepted Applications Section */}
          <h3 className="application-container--heading">Accepted Sessions</h3>
          <div className="application-container application-container--accepted">
            {acceptedSessions && acceptedSessions.length > 0 ? (
              acceptedSessions.map((session) => (
                <SessionCard
                  key={uuidv4()}
                  session={session}
                  role={user!.role}
                 /* onClick={() => {
                    setShowSessionModal(true);
                    setActiveSession({ ...session });
                  }}*/
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
          <h3 className="application-container--heading">{user?.role === "mentor" ? "Cancelled Sessions" : "Rejected Sessions"}</h3>
          <div className="application-container application-container--rejected">
            {rejectedSessions && rejectedSessions.length > 0 && user?.role === "mentee" ? <p>Mentors are available at other times and encourage mentees to request scheduling for other days.</p> : null}
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
