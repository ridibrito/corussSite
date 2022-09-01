import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "Amil", "Bradesco", "Smile","Unimed" ],
  ["Janeiro", 1000, 400, 200, 300],
  ["fevereiro", 1170, 460, 250,280],
  ["Março", 660, 1120, 300,500],
  ["Abril", 1030, 540, 350,800],
];

export const options = {
  chart: {
    title: "Vendas por operadora",
    subtitle: "Mensal ",
  },
};

export default function Chartbar() {
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
