import React from 'react';

require('./eventCard.scss')

// import saveIcon from '../../assets/images/card-save-icon.png';

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
  return (
    <article className="card-link">
      <figure className="image-wrapper">
        <img src={props.image?.imageUrl} alt={props.image?.imageAlt} className="image" />
      </figure>
      <div className="card-description">
        <h1 className="title text-is-red">{props.title}</h1>
        <div className="date-time text-is-red">{props.dateTime}</div>
        <div className="location">{props.location} <span>{props.address}</span></div>
        <div className="admission">{props.admission}</div>
        <button className="save-icon"><img src={require('../../assets/images/card-save-icon.png')} alt="Card Save Icon" /></button>
      </div>
    </article>
  )
}

export default EventCard;