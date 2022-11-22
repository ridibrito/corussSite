import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "Adesão", "PME", "Individual", "Odontológico"],
  ["2014", 1000, 400, 200, 300],
  ["2015", 1170, 460, 250, 280],
  ["2016", 660, 1120, 300, 360],
  ["2017", 1030, 540, 350, 1060],
];

export const options = {
  chart: {
    title: "Vendas por operdaora",
    subtitle: "Valores em reais(BLR)"
  },
};

export default function App() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
