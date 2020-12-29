import React, { useState } from 'react';
import EventsCardCarousel from '../../components/Events/EventsCard/EventsCardCarousel';
import EventsForm from '../../components/Events/EventsForm/EventsForm';
import EventsFormSuccess from '../../modals/EventsFormSuccess/eventsFormSuccess.modal';
import { singlePageEvent } from '../../lib/events';
import { Route, Switch, useRouteMatch } from 'react-router';
import SinglePageEvent from '../../components/Events/EventSinglePage/EventSinglePage';
import { Link } from 'react-router-dom';

require('./events.scss')

const EventsPage = () => {

	let match = useRouteMatch();
	const [formSuccessModal, setFormSuccessModal] = useState<boolean>(false)


	return (

		<>
			{formSuccessModal &&
				<EventsFormSuccess onClose={() => setFormSuccessModal(false)} />}
			<main className="events-page">
				<section className="hero-section grid-justify-center">
					<h1 className="hero-title">Upcoming <span className="text-is-red">Events</span></h1>
					<p className="hero-description">
						Stay in the know of all our upcoming events. Are you passionate
						about changing social paradigms? Apply to be an official partner
						of WOiT, and help us create a more gender equal STEM environment.
				</p>
				</section>
				<section className="cta-section grid-full-width" style={{ backgroundImage: `url(${singlePageEvent.image.imageUrl})` }}>
					<div className="cta-container">
						<div className="cta-text">
							{singlePageEvent.title}
							<span className="text-is-red">{singlePageEvent.subTitle}</span>
						</div>

						<Link className="cta-button" to={`${match.url}/${singlePageEvent.eventId}`}>Learn More</Link>

					</div>
					<div className="cta-date">{singlePageEvent.shortDate.month} <span>{singlePageEvent.shortDate.day}</span></div>
				</section>

				<EventsCardCarousel />
				<EventsForm formModal={() => setFormSuccessModal(true)} />
			</main>
		</>
	)
}

export default EventsPage;