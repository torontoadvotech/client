import React, { useEffect, useRef, useState } from 'react';

require('./eventCard.scss')

import saveIcon from '../../../assets/images/card-save-icon.png';

// const saveIcon = require('../../assets/images/card-save-icon.png')
export interface EventCardProps {
  image?: {
    imageUrl: string,
    imageAlt: string
  },
  title: string,
  dateTime: string,
  location: string,
  address: string,
  admission: string
}

const EventCard: React.FunctionComponent<EventCardProps> = (props) => {

  const [imgFullWidth, setImgFullWidth] = useState<Boolean>(false);

  const cardImg = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: any = null;


    const calculateImgFullWidth = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const imgLessThanParent = cardImg?.current.getBoundingClientRect().width < cardImg?.current.parentElement?.getBoundingClientRect().width

        if (imgLessThanParent) {
          setImgFullWidth(true);
        } else {
          setImgFullWidth(false)
        }
      }, 150)
    }
    calculateImgFullWidth();
    window.addEventListener('resize', calculateImgFullWidth);

    // Clean up event listeners on componenet unmount
    return () => {
      window.removeEventListener('resize', calculateImgFullWidth)
    }
  }, []);

  return (
    <article className="card-link">
      <figure className="image-wrapper">
        <img src={props.image?.imageUrl} alt={props.image?.imageAlt} className={'image' + (imgFullWidth ? ' img-full-width' : '')} ref={cardImg} />
      </figure>
      <div className="card-description">
        <h1 className="title text-is-red">{props.title}</h1>
        <div className="date-time text-is-red">{props.dateTime}</div>
        <div className="location">{props.location} <span>{props.address}</span></div>
        <div className="admission">{props.admission}</div>
        <button className="save-icon"><img src={saveIcon} alt="Card Save Icon" /></button>
      </div>
    </article>
  )
}

export default EventCard;