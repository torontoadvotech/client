import React from 'react';

require('./events.scss')

const EventsPage = () => {
	return (
		<main className="events-page">
			<section className="events-hero-section">
				<h1 className="hero-title">Upcoming <span>Events</span></h1>
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
						<span>LEARN T.O</span>
					</div>
					<button className="cta-button">
						Learn More
					</button>
				</div>
				<div className="cta-date">Dec <span>22</span></div>
			</section>
			<section className="event-cards-section">
				<div className="events-scroller"><span> &lt; </span><span> &gt; </span></div>
				<div className="events-cards">
					{/*  Cards component here */}
				</div>
				<button className="events-all">View All Events</button>
			</section>
			<form className="events-form"></form>
		</main>
	)
}

export default EventsPage;