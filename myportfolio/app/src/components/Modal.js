import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center hover:cursor-pointer"
      onClick={onClose}
      style={{ zIndex: 1000 }}
    >
      <div
        className="bg-transparent rounded-lg relative hover:cursor-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside
      >
        {children}
        <button
          onClick={onClose}
          className="absolute -top-6 -right-10 md:-right-20 text-white hover:text-blue-300 bg-slate-400 opacity-50 rounded-full p-2 hover:cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
