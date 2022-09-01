import { Chart } from "react-google-charts";

export const data = [
  ["Vendedor", "Valor", "Vendas"],
  ["João", 1000, 400],
  ["José", 1170, 460],
  ["Sidney", 660, 1120],
  ["Ricardo", 1030, 540],
  ["Lilian", 1080, 530],
];

export const options = {
  title: "Valor por vendedor",
  hAxis: { title: "vendedor", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "80%", height: "70%" },
};

export default function chartValor() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
