import './viewSessionInfo.modal.scss'

import React, { useState } from 'react';

import Modal from '../../components/Modal/Modal';
import API from '../../lib/API';


interface viewSessionInfoModalProps {
    onClose(): void;
}

export const viewSessionInfoModal: React.FC<viewSessionInfoModalProps> = ({onClose}) => {


    return <Modal onClose={onClose} title="Session Information" className="session-view-modal">
        
    </Modal>
}

