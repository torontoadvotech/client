import React from "react";
// import Modal from "../Modal";
import Modal from '../../components/Modal/Modal';

import './submitModal.scss';

interface Props {
  onClose: () => void;
}

const SubmitModal = ({ onClose }: Props) => {
  return (
    <Modal title="Great" className='success-modal' onClose={onClose}>
      <>
        <p>Your availability has been set</p>
        <p>You can view and edit your availability on your profile.</p>
      </>
    </Modal>
  );
};

export default SubmitModal;