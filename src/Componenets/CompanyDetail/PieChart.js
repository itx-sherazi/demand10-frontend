"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Loaded on demand from CompanyDetail so chart.js stays out of the initial bundle
export default function PieChart(props) {
  return <Pie {...props} />;
}
