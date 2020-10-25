import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";

import "./modal.scss";

interface Props {
  title: string;
  onClose: () => void;
  className?: string;
}

const Modal: React.FunctionComponent<Props> = (props) => {
  const modalRoot = document.getElementById("modal")!;

  const el: HTMLElement = document.createElement("aside");

  useEffect(() => {
    modalRoot.classList.add("open");

    // Clean up
    return () => {
      modalRoot.classList.remove("open");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <header>
        <h2>{props.title}</h2>
        <div onClick={props.onClose}>
          <span>x</span>
        </div>
      </header>
      <div className="modal-content">{props.children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
