import React from "react";

export default function PredictionTable({ predictions }) {
  if (!predictions || predictions.length === 0) return null;

  return (
    <div className="results-section">
      <h2 className="section-title">Top Predictions</h2>
      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Kode</th>
              <th>RevNeg</th>
              <th>RevNeg Conf.</th>
              <th>NetProfNeg</th>
              <th>NetProf Conf.</th>
              <th>NPM</th>
              <th>Composite</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((item) => (
              <tr key={item.kode_label}>
                <td>
                  <span className="rank-badge">{item.rank}</span>
                </td>
                <td className="company-code">{item.kode_perusahaan}</td>
                <td>
                  <span
                    className={`status-badge ${
                      item.revneg === 0 ? "positive" : "negative"
                    }`}
                  >
                    {item.revneg === 0 ? "Positive" : "Negative"}
                  </span>
                </td>
                <td>{(item.revneg_confidence * 100).toFixed(1)}%</td>
                <td>
                  <span
                    className={`status-badge ${
                      item.netprofneg === 0 ? "positive" : "negative"
                    }`}
                  >
                    {item.netprofneg === 0 ? "Positive" : "Negative"}
                  </span>
                </td>
                <td>{(item.netprofneg_confidence * 100).toFixed(1)}%</td>
                <td className="npm-value">
                  {(item.npm_prediction * 100).toFixed(2)}%
                </td>
                <td>
                  <div className="score-bar">
                    <div
                      className="score-fill"
                      style={{ width: `${item.composite_score * 100}%` }}
                    />
                    <span className="score-text">
                      {(item.composite_score * 100).toFixed(1)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
