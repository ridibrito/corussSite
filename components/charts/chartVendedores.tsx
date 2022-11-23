import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Adesão", 11],
  ["PME", 6],
  ["Familiar", 2],
  ["Individual", 2],
  ["Odontológico", 7],
];

export const options = {
  title: "",
};

export default function App() {
  return (
    <>
      <h2 className="px-5 pt-5">Por tipo de plano</h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}
