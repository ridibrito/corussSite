import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "Amil", "Bradesco", "SulAmérica", "Unimed", "Ideal saúde", "Média"],
  ["Junho", 165, 938, 522, 998, 450, 614.6],
  ["Julho", 165, 938, 522, 998, 450, 614.6],
  ["Agosto", 135, 1120, 599, 1268, 288, 682],
  ["Setembro", 157, 1167, 587, 807, 397, 623],
  ["Outubro", 139, 1110, 615, 968, 215, 609.4],
  ["Novembro", 136, 691, 629, 1026, 366, 569.6],
];

export const options = {
  title: "Venda por operadora por mês",
  vAxis: { title: "Valores em reais (BLR)" },
  hAxis: { title: "Mês" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

export default function ChartValor() {
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
