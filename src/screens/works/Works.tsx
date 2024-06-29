import { Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

import { WorksCard } from "~/components/works-components";
import { projectsList } from "./utils";
import { TitlePage } from "~/components";

const Works = (): ReactElement => {
  return (
    <Stack id="works" gap={5} sx={{ padding: 10, marginBottom: 5 }}>
      <TitlePage textAlign="right" title="works." />

      <Stack>
        <Typography variant="h5">
          Check out some of my latest projects.
        </Typography>
        <Typography variant="subtitle1">
          I've worked at start-ups, tech companies and corporates on a range of
          different projects, including design systems, websites and apps.
        </Typography>
      </Stack>

      <Grid container spacing={4}>
        {projectsList?.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <WorksCard image={item.image} title={item.title} tech={item.tech} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Works;
