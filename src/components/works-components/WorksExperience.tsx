import { ReactElement } from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { IWorksExperience } from "./types";

interface WorksExperienceProps {
  data: IWorksExperience;
}
export const WorksExperience = (props: WorksExperienceProps): ReactElement => {
  const { data } = props;
  return (
    <Card sx={{ maxWidth: 345, padding: 0.5 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={data?.imageSrc}
        title={data?.imageSrc}
      />
      <CardContent sx={{ backgroundColor: "#fff" }}>
        <Typography gutterBottom variant="h6" component="div">
          {data?.jobTitle} @ {data?.company || ""}.
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {data?.employmentDateStart} to {data?.employmentDateEnd}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {data?.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorksExperience;
