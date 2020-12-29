import React, { useEffect, useRef, useState } from 'react';

import { eventExport } from '../../../lib/events';

import EventCard from './EventCard';

import leftArrow from '../../../assets/images/left-arrow-glyph.png';
import rightArrow from '../../../assets/images/right-arrow-glyph.png';

require('./eventsCardCarousel.scss');

const numOfVisibleCards = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1000) {
    return 3;
  } else if (windowWidth >= 700) {
    return 2;
  } else {
    return 1;
  }
}

const EventsCardCarousel = () => {

  const [numVisibleCards, setNumVisibleCards] = useState<number>(numOfVisibleCards);
  const [currentLeadingCardNum, setCurrentLeadingCardNum] = useState<number>(0);
  // const [cards, setCards] = useState([])

  const cardsContainerRef = useRef<HTMLUListElement | null>(null);

  let distFromFirstCard: number | undefined;

  useEffect(() => {
    let timeoutId: any = null;


    const calculateVisibleCards = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setNumVisibleCards(numOfVisibleCards());
      }, 150)
    }

    window.addEventListener('resize', calculateVisibleCards);

    // Clean up event listeners on componenet unmount
    return () => {
      window.removeEventListener('resize', calculateVisibleCards)
    }
  }, []);

  // const eventsObject: object = eventExport;

  const carouselSlide = (direction: string) => {

    // Helper Function
    const scrollCarousel = (element: HTMLElement, moveValue: number) => {
      element.scroll({
        left: moveValue,
        behavior: 'smooth'
      });
    };

    // Scroll to next tile
    if (direction === 'r') {
      const nextCard = currentLeadingCardNum + numVisibleCards;

      if (cardsContainerRef!.current!.childElementCount > nextCard) {
        if (distFromFirstCard === undefined) {
          distFromFirstCard = cardsContainerRef!.current!.firstElementChild?.getBoundingClientRect().x;
        }
        const rightTargetChild = cardsContainerRef!.current!.children[nextCard];

        const rightMoveAmount = rightTargetChild.getBoundingClientRect().x - distFromFirstCard!;

        scrollCarousel(cardsContainerRef!.current!, rightMoveAmount);
        setCurrentLeadingCardNum(nextCard);
      }
    } else {
      if (currentLeadingCardNum !== 0) {
        const previousCard = currentLeadingCardNum - numVisibleCards >= 0 ? currentLeadingCardNum - numVisibleCards : 0;

        if (distFromFirstCard === undefined) {
          distFromFirstCard = cardsContainerRef!.current!.firstElementChild?.getBoundingClientRect().x;
        }
        const leftTargetChild = cardsContainerRef!.current!.children[previousCard];
        const leftMoveAmount = leftTargetChild.getBoundingClientRect().x - distFromFirstCard!;
        scrollCarousel(cardsContainerRef!.current!, leftMoveAmount);
        setCurrentLeadingCardNum(previousCard);
      }
    }
  };

  return (
    <section className="event-cards-section grid-justify-center">
      <div className="event-scroller">
        <button className="left-arrow" onClick={() => carouselSlide('l')}>
          <img src={leftArrow} alt="Left Arrow Glyphicon" />
        </button>
        <button className="right-arrow" onClick={() => carouselSlide('r')}>
          <img src={rightArrow} alt="Right Arrow Glyphicon" />
        </button>
      </div>
      <div className="cards-carousel"><ul className="event-cards-container" ref={cardsContainerRef}>
        {eventExport.map((v, i) => {
          return (
            <li className="event-card" key={i}>
              <EventCard
                title={v.title}
                image={v.image}
                dateTime={v.dateTime}
                location={v.location}
                address={v.address}
                admission={v.admission}
              />
            </li>)
        })}
      </ul></div>
      <button className="events-all button-primary">View All Events</button>
    </section>
  )
}

export default EventsCardCarousel;