import axios from "axios";

const API_URL = "https://skripsibackend-production-1991.up.railway.app/predict";

export const getPredictions = async (formData) => {
  try {
    // Convert percentage to decimal for backend
    const inputData = {
      tahun: formData.tahun,
      kuartal: formData.kuartal,
      ihsg: formData.ihsg / 100, // 5% -> 0.05
      lq45: formData.lq45 / 100, // 3.5% -> 0.035
    };

    console.log("Sending to backend:", inputData);

    const response = await axios.post(API_URL, inputData);
    const data = response.data;

    console.log("Received from backend:", data);

    // Return data as is (already in decimal format from backend)
    // Frontend will convert to percentage in PredictionTable component
    return data;
  } catch (error) {
    console.error("Error fetching predictions:", error);
    return {
      error: "Failed to fetch pred  ictions. Make sure backend is running.",
      top_predictions: [],
    };
  }
};
