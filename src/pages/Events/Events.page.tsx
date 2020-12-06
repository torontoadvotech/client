import React from 'react';
import EventsCardCarousel from '../../components/EventsCard/EventsCardCarousel';

require('./events.scss')

const EventsPage = () => {
	return (
		<main className="events-page layout-wrapper">
			<section className="events-hero-section">
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

			<section className="form-section">
				<div className="form-section-header">
					<h3 className="form-section-header-title">
						Host an event
					</h3>
					<p className="form-section-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere tortor egestas massa
						scelerisque eleifend quam. Euismod scelerisque eu tempor arcu, sit ornare sit.
					</p>
				</div>
				<form className="events-form">
					<div className="form-name">
						<label htmlFor="form-name">Name</label>
						<input type="text" name="name-input" id="form-name" placeholder="Jenna Hunter" />
					</div>
					<div className="form-email">
						<label htmlFor="form-name">Email</label>
						<input type="email" name="email-input" id="form-email" placeholder="jenna.hunter@gmail.com" />
					</div>
					<div className="form-phone">
						<label htmlFor="form-phone">Phone</label>
						<input type="tel" name="form-input" id="form-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="416-111-1111" />
					</div>
					<div className="form-request">
						<label htmlFor="form-request">Summary of Request</label>
						<textarea name="form-request" id="form-reqeust" placeholder="Hello, I would like to host an event&#10; &#10;Thanks,&#10;&#10;John" ></textarea>
					</div>
				</form>
			</section>
		</main>
	)
}

export default EventsPage;