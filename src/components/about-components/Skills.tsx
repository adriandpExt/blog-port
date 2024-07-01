import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { dataset } from "./utils";
import { ReactElement } from "react";

export const Skills = (): ReactElement => {
  const data = dataset.map((item) => ({
    name: item.tech,
    rating: item.rating,
  }));

  return (
    <div
      style={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 5rem",
        width: "100%",
        height: "100vh",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="rating" fill="#F4A261">
            <LabelList dataKey="rating" position="center" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Skills;
