import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./modal.scss";

interface Props {
  title: string;
  onClose: () => void;
  className?: string;
}

const Modal: React.FunctionComponent<Props> = (props) => {
  const modalRoot = document.getElementById("modal")!;

  useEffect(() => {
    modalRoot.classList.add("open");
    props.className ? modalRoot.classList.add(props.className) : null;

    // Clean up
    return () => {
      modalRoot.classList.remove("open");
      props.className ? modalRoot.classList.remove(props.className) : null;
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <header>
        <h2>{props.title}</h2>
        <div className="modal-close" onClick={props.onClose} role="button">
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </header>
      <div className="modal-content">{props.children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
