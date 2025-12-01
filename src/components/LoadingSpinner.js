import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="prediction-section">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Generating predictions...</p>
      </div>
    </div>
  );
}
