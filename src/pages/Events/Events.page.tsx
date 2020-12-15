import React from 'react';
import EventsCardCarousel from '../../components/EventsCard/EventsCardCarousel';
import EventsForm from './EventsForm';

require('./events.scss')

const EventsPage = () => {
	return (
		<main className="events-page">
			<section className="events-hero-section grid-span-8">
				<h1 className="hero-title">Upcoming <span className="text-is-red">Events</span></h1>
				<p className="hero-description">
					Stay in the know of all our upcoming events. Are you passionate
					about changing social paradigms? Apply to be an official partner
					of WOiT, and help us create a more gender equal STEM environment.
				</p>
			</section>
			<section className="cta-section">
				<div className="cta-container">
					<div className="cta-text">
						SOCIAL
						<span className="text-is-red">LEARN T.O</span>
					</div>
					<a className="cta-button">
						Learn More
					</a>
				</div>
				<div className="cta-date">Dec <span>22</span></div>
			</section>

			<EventsCardCarousel />



			<EventsForm />



			{/* </section> */}
		</main>
	)
}

export default EventsPage;