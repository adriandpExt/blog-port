import { Box, Divider, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

import { CardImage, TitlePage } from "~/components";

const About = (): ReactElement => {
  return (
    <>
      <Stack gap={5} sx={{ padding: 10 }}>
        <TitlePage title="about." />

        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Stack gap={3}>
              <Typography>
                I'm a Frontend Developer and a Software Developer.
              </Typography>

              <Typography textAlign={"justify"}>
                Since 2022, I embarked on my journey into Front-End and Software
                Development. With a passion for creating seamless and
                user-friendly web applications, I specialize in JavaScript and
                have extensive experience with frameworks like React and Vue. My
                expertise extends to TypeScript and backend development using
                Node.js, enabling me to build comprehensive and robust
                applications.
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            display={"flex"}
            justifyContent={"center"}
          >
            <CardImage />
          </Grid>
        </Grid>

        <Divider color="whitesmoke" />

        <Box>
          <Typography>Skills</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default About;
