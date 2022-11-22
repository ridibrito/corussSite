import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Mês anterior"],
  ["Amil adesão", 250],
  ["Bradesco PME", 4200],
  ["Unimed PME", 2900],
  ["Smile adesão", 8200],
];

const dataNew = [
  ["Name", "Mês atual"],
  ["Amil adesão", 370],
  ["Bradesco PME", 600],
  ["Unimed PME", 700],
  ["Smile adesão", 1500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const options = {
  legend: { position: "top" },
};

export default function ChartComparativo() {
  return (
    <>
    <h2 className="px-5 pt-5 ">Comparativo mês anterior</h2>
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
      options={options}
      />
      </>
  );
}
