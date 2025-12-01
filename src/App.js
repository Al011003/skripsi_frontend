import React, { useState } from "react";
import Overview from "./components/OverView";
import InputForm from "./components/InputForm";
import PredictionTable from "./components/PredictionTable";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorModal from "./components/ErrorModal";
import { getPredictions } from "./api";
import "./App.css";

export default function App() {
  const [currentView, setCurrentView] = useState("overview");
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    const result = await getPredictions(formData);

    if (result.error) {
      setError(result.error);
      setPredictions([]);
    } else {
      setPredictions(result.top_predictions || []);
    }

    setLoading(false);
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div className="app-wrapper">
      <ErrorModal message={error} onClose={handleCloseError} />

      {currentView === "overview" ? (
        <Overview onStartPredict={() => setCurrentView("predict")} />
      ) : (
        <>
          <button
            className="back-button"
            onClick={() => setCurrentView("overview")}
          >
            ← Back to Overview
          </button>

          <InputForm onSubmit={handleSubmit} />

          {loading && <LoadingSpinner />}

          {!loading && !error && <PredictionTable predictions={predictions} />}
        </>
      )}
    </div>
  );
}
