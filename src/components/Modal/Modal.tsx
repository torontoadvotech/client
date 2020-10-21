import React, { useEffect } from 'react';
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
   

    useEffect(() => {
      modalRoot.appendChild(el)
      modalRoot.classList.add('open')

      // Clean up 
      return () => {
        modalRoot.removeChild(el)
        modalRoot.classList.remove('open')
      }
    }, [])


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