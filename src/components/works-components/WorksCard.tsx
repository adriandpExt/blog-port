import { WorksCardProps } from "./types";

import { ReactElement } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import theme from "~/theme";

export const WorksCard = (props: WorksCardProps): ReactElement => {
  const { image, title, tech } = props;
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#fff",
        padding: 1,
      }}
    >
      <CardContent sx={{ backgroundColor: theme.palette.background.default }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
      </CardContent>

      <CardContent>
        <Typography variant="h6">{title}</Typography>

        <Grid container spacing={1}>
          {tech?.map((item, index) => (
            <Grid item key={index}>
              <Typography variant="caption">{item}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WorksCard;
