import { Chart } from "react-google-charts";

export const data = [
  ["Por vendedor", "Hours per Day"],
  ["João", 11],
  ["José", 2],
  ["Sidney", 2],
  ["Ricardo", 2],
  ["Lilian", 7], // CSS-style declaration
];

export const options = {
  title: "Por vendedor",
  pieHole: 0.4,
  is3D: false,
};

export default function ChartVendedores() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
