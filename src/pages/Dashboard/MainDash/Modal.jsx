import React from "react";

export default function Modal({
  children,
  title,
  isOpen,
  handleSubmit,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 h-1/2 max-w-md">
        <div className="mb-4">{children}</div>
       <div className="flex flex-col p-2 gap-4 ">
       <button
          onClick={handleSubmit}
          className="bg-nurse-300 hover:bg-nurse-400 text-white font-bold py-2 px-4 rounded"
        >
          {title}
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          {"Cancle"}
        </button>
       </div>
      </div>
    </div>
  );
}
