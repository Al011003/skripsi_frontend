import React from "react";
import { BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import gambar from "url:../assets/4065113.jpg";
export default function Overview({ onStartPredict }) {
  return (
    <>
      <div className="header">
        <h1>NPM Prediction System</h1>
        <p>Sistem Prediksi Net Profit Margin Perusahaan Sekuritas</p>
      </div>

      <div className="overview-container">
        <div className="overview-content">
          <h2>
            <TrendingUp size={24} />
            Overview
          </h2>
          <p>
            Aplikasi ini menggunakan machine learning untuk memprediksi Net
            Profit Margin (NPM) perusahaan sekuritas berdasarkan data
            volatilitas pasar.
          </p>
          <ul>
            <li>Prediksi Revenue Growth (Positive/Negative)</li>
            <li>Prediksi Net Profit (Positive/Negative)</li>
            <li>Estimasi NPM Perusahaan</li>
            <li>Composite Score untuk Ranking</li>
          </ul>
          <button className="start-button" onClick={onStartPredict}>
            <BarChart3 size={24} />
            Start Prediction
            <ArrowRight size={24} />
          </button>
        </div>

        <div className="overview-image">
          <img src={gambar} alt="NPM Prediction" className="overview-img" />
        </div>
      </div>
    </>
  );
}
