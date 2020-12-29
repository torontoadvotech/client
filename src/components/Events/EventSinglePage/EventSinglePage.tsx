import './eventSinglePage.scss';

import React, { useEffect, useState } from 'react';
import { Link, Redirect, useRouteMatch } from 'react-router-dom';
import { singlePageEvent } from '../../../lib/events';

const SinglePageEvent = () => {

  const currentId = useRouteMatch().params.eventId;
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    console.log('current id', currentId, singlePageEvent.eventId, currentId !== singlePageEvent.eventId);

    if ((Object.keys(singlePageEvent).length === 0 && singlePageEvent.constructor === Object) || (currentId !== singlePageEvent.eventId)) {
      setRedirect(true);
    }
  })

  return (
    <>
      {redirect && <Redirect to="/events" />}
      <main className="events-page event-page-single">
        <section className="event-header-section">
          <h1>{singlePageEvent.title}<span>
            {singlePageEvent.subTitle.split(' ')[0]} <span className="text-is-red">
              {singlePageEvent.subTitle.split(' ')[1]}</span></span></h1>
          <div className="event-description">
            {singlePageEvent.description}
          </div>
        </section>

        <section className="event-image-section grid-full-width">
          <img src={singlePageEvent.image.imageUrl} alt={singlePageEvent.image.imageAlt} />
        </section>

        <section className="event-detail-section">
          <div className="date-time text-is-red">
            {singlePageEvent.fullDate}
          </div>
          <div className="location">
            {singlePageEvent.location.name}
            <span>
              {singlePageEvent.location.address}
            </span>
          </div>
          <div className="admission">
            Admission Available At Door
          </div>
        </section>
      </main>
    </>
  )
};

export default SinglePageEvent;