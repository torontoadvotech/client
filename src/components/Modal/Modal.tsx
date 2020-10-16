import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

interface Props {
    title: string;
    onClose: () => void;
    className?: string;
}




const Modal : React.FunctionComponent<Props> = (props) => {

    const modalRoot = document.getElementById('modal')!;

    const el : HTMLElement = document.createElement('aside')
    modalRoot.appendChild(el)


     return ReactDOM.createPortal(
      <>
        <header>
          <h2>{props.title}</h2>
          <div onClick={props.onClose}>
            {/* <IconClose /> */}
          </div>
        </header>
        <div className="content">{props.children}</div>
      </>,
        el
    );

}

export default Modal