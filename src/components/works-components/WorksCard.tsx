import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { ReactElement } from "react";
import theme from "~/theme";

interface WorksCardProps {
  image: string;
  title: string;
  tech: string[];
}
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
