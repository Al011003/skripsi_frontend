import React, { useState } from "react";
import { BarChart3, ArrowRight } from "lucide-react";

export default function InputForm({ onSubmit }) {
  const [form, setForm] = useState({
    tahun: 2025,
    kuartal: 1,
    ihsg: 5.0,
    lq45: 3.5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: parseFloat(value) || value });
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="prediction-section">
      <h2 className="section-title">Input Parameters</h2>
      <div className="modern-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Tahun</label>
            <input
              type="number"
              name="tahun"
              value={form.tahun}
              onChange={handleChange}
              placeholder="2025"
            />
          </div>
          <div className="form-group">
            <label>Kuartal</label>
            <input
              type="number"
              name="kuartal"
              value={form.kuartal}
              onChange={handleChange}
              placeholder="1-4"
              min="1"
              max="4"
            />
          </div>
          <div className="form-group">
            <label>Volatilitas IHSG (%)</label>
            <input
              type="number"
              step="0.1"
              name="ihsg"
              value={form.ihsg}
              onChange={handleChange}
              placeholder="0.0"
            />
          </div>
          <div className="form-group">
            <label>Volatilitas LQ45 (%)</label>
            <input
              type="number"
              step="0.1"
              name="lq45"
              value={form.lq45}
              onChange={handleChange}
              placeholder="0.0"
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="predict-button">
          <BarChart3 size={20} />
          Generate Predictions
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
