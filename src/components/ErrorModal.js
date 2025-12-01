import React from "react";
import { AlertCircle, X } from "lucide-react";

export default function ErrorModal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-icon">
          <AlertCircle size={60} />
        </div>
        <h3 className="modal-title">Oops! Something went wrong</h3>
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onClose}>
          Try Again
        </button>
      </div>
    </div>
  );
}
