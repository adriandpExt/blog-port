import { ReactElement } from "react";
import { ReactTyped } from "react-typed";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AnimatedIcon, SvgIcons } from "~/components";
import theme from "~/theme";
import { Grid } from "@mui/material";

const Home = (): ReactElement => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        margin: "10rem 3rem 3rem 3rem",
      }}
    >
      <Grid
        container
        padding={5}
        spacing={3}
        sx={{ color: theme.palette.background.paper }}
      >
        <Grid item xs={12} lg={6}>
          <Stack direction={"row"} alignItems={"center"}>
            <AnimatedIcon icon="developer" />
            <Typography variant="h3" fontFamily="Ransock">
              Hey!
            </Typography>
          </Stack>

          <Typography variant="h2" fontFamily={"Ransock"}>
            <ReactTyped strings={["Adrian Del Prado"]} typeSpeed={100} />
          </Typography>

          <Typography variant="h5">
            <ReactTyped
              strings={["FRONTEND DEVELOPER", " SOFTWARE DEVELOPER"]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </Typography>
          <Typography variant="h6">
            A developer that crafting clean, elegant, and efficient code,
            ensuring robust and visually appealing solutions.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "10rem",
              backgroundColor: theme.palette.background.paper,
            }}
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </Grid>

        <Grid item xs={12} lg={6}>
          <SvgIcons name="ic_manOnTable" width={"auto"} height={"auto"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
