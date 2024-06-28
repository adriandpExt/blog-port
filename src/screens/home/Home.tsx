import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

import imageHero from "../../assets/images/image-hero-desktop.png";
import theme from "~/theme";

const Home = (): ReactElement => {
  return (
    <Box
      sx={{
        height: "100%",
        margin: "5rem 3rem 10rem 3rem",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} sx={{ textAlign: "center" }}>
          <img src={imageHero} alt="banner" height="50%" width="50%" />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Stack gap={2}>
            <Typography variant="h3">
              Hey! I'm {""}
              <span style={{ color: theme.palette.background.paper }}>
                Adrian Del Prado
              </span>
            </Typography>

            <Typography>Frontend Developer | Software Developer</Typography>

            <Typography variant="subtitle2" textAlign={"justify"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ab a ut eligendi est, cupiditate ea blanditiis amet quas dolores
              veniam laboriosam aut perferendis, libero architecto sed
              accusamus. Voluptas, temporibus.
            </Typography>

            <Button variant="contained" sx={{ width: "10rem" }}>
              Learn More
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
