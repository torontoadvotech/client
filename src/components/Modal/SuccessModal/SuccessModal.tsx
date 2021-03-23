import React from "react";
import Modal from "../Modal";

import './successModal.scss';

interface Props {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: Props) => {
  return (
    <Modal title={"Congrats!"} className='success-modal' onClose={onClose}>
      <>
        <p>
          Your request has been sent and is under review by our team. You should
          receive a response within the next 48 hours!
        </p>
        <button className='button-primary' onClick={onClose}>
          Okay
        </button>
      </>
    </Modal>
  );
};

export default SuccessModal;