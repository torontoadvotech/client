import React from "react";
// import Modal from "../Modal";
import Modal from '../../components/Modal/Modal';

import './confirmModal.scss';

interface Props {
  onClose: () => void;
  status: string;
  takeAction: (status:string) => void;
}

const ConfirmModal = ({ onClose, status, takeAction }: Props) => {
    const getText = () => {
        if (status === 'reject') {
            return "Reject Invitation"
        }
        if (status === 'confirm') {
            return "Confirm Invitation"
        }

        if (status === 'cancek') {
            return "Cancel Invitation"
        }
        return "";
    } 

    const getSentence = () => {
        if (status === 'reject') {
            return "Are you sure you want to reject this invitation?"
        }
        if (status === 'confirm') {
            return "Are you sure you want to confirm this invitation?"
        }

        if (status === 'cancek') {
            return "Are you sure you want to cancel this session?"
        }
        return "";
    } 

    const text = getText();
    const sentence = getSentence();

  return (
    <Modal title={text} className='confirm-modal' onClose={onClose}>
      <>
        <p>{sentence}</p>
        <div className="button-row">
            <button className='button-primary' onClick={onClose}>
            No
            </button>
            <button className='button-primary' onClick={() => takeAction(status)}>
            Yes
            </button>
        </div>
      </>
    </Modal>
  );
};

export default ConfirmModal;