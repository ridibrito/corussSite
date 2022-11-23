import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Ano", "Amil", "Bradesco", "SulAmerica", "Unimed", "Ideal saúde"],
  ["2021", 660, 1120, 300, 360, 200],
  ["2022", 1030, 540, 350, 1060, 150],
];

export const options = {
  chart: {
    title: "Vendas por operdaora por ano",
    subtitle: "Valores em reais(BLR)",
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
