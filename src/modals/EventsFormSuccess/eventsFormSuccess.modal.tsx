import './eventsFormSuccess.modal.scss'

import React from 'react';

import Modal from '../../components/Modal/Modal';

interface eventsFormSuccessProps {
  onClose(): void;
}

const EventsFormSucess: React.FC<eventsFormSuccessProps> = (
  { onClose }
) => {
  return (
    <Modal
      onClose={onClose}
      title='Congrats!'
      className='events-form-success-modal'
    >
      <>
        Your request has been sent and is under review by our team. You should receive a response within the next 48 hours.
        <button className="events-modal-okay" onClick={onClose}>Okay</button>
      </>
    </Modal>
  );
};

export default EventsFormSucess;
