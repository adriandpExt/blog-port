import { ReactElement } from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { IWorksExperience } from "./types";
import theme from "~/theme";

interface WorksExperienceProps {
  data: IWorksExperience;
}
export const WorksExperience = (props: WorksExperienceProps): ReactElement => {
  const { data } = props;
  return (
    <Card sx={{ maxWidth: 345, padding: 1, background: "#fff" }}>
      <CardContent sx={{ backgroundColor: theme.palette.background.default }}>
        <CardMedia
          sx={{ height: 100 }}
          image={data?.imageSrc}
          title={data?.imageSrc}
        />
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
