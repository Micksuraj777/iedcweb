"use client"
import React from "react";

interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [display, setDisplay] = React.useState(false);
  if (!props.children) return null;

  return (
    <React.Fragment>
      {props.trigger ? ( <div onClick={() => setDisplay(true)}>{props.trigger as React.ReactElement}</div>) : (
        <button onClick={() => setDisplay(true)} className="text-blue-500">Open Modal</button>
      )}
      {display && (
        <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={() => setDisplay(false)}
      >
        <div className="relative bg-white p-4 rounded-lg">
          <button
            onClick={() => setDisplay(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          { props.children}
        </div>
      </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
