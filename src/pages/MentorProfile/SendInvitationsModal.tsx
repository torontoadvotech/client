import React from "react";
// import Modal from "../Modal";
import Modal from '../../components/Modal/Modal';
import './sendInvitationsModal.scss';

interface Props {
  onClose: () => void;
  invitations: any[]
}

const SendInvitationsModal = ({ onClose, invitations }: Props) => {
    console.log(invitations);


  return (
    <Modal title="Congratulations" className='success-modal' onClose={onClose}>
      <>
        <p>Meeting One Invitation(s) Sent</p>
        <p>{invitations?.map((timeslot:any)=> {
            const convertedDate = new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'full',
              timeZone: 'America/Toronto',
            }).format(timeslot.start);
            return (<div className="selected-slot">
              <p>{convertedDate} at {timeslot.selectedTimeslot[0]}</p>
            </div>)
        })}</p>
      </>
    </Modal>
  );
};

export default SendInvitationsModal;