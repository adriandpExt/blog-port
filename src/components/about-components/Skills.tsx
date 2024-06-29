import { ReactElement } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

import { dataset } from "./utils";

export const Skills = (): ReactElement => {
  const techNames = dataset.map((item) => item.tech);
  const ratings = dataset.map((item) => item.rating);

  return (
    <>
      <BarChart
        xAxis={[{ scaleType: "band", data: techNames }]}
        series={[{ data: ratings, label: "TECH STACKS", color: "#F4A261" }]}
        height={500}
      />
    </>
  );
};

export default Skills;
