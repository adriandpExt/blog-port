import { ReactElement } from "react";
import { ReactTyped } from "react-typed";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AnimatedIcon } from "~/components";
import theme from "~/theme";

const Home = (): ReactElement => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/99/fa/00/99fa00eeccdaf09a0af865fe6a641d47.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "50%",
          margin: "10rem 3rem 10rem 3rem",
        }}
      >
        <Stack
          gap={3}
          padding={5}
          sx={{ color: theme.palette.background.default }}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <AnimatedIcon icon="developer" />
            <Typography variant="h3" fontFamily="Ransock">
              Hey!
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: theme.palette.background.default,
            }}
            variant="h2"
            fontFamily={"Ransock"}
          >
            <ReactTyped strings={["Adrian Del Prado"]} typeSpeed={100} />
          </Typography>

          <Typography
            sx={{ color: theme.palette.background.default }}
            variant="h5"
          >
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
            sx={{ width: "10rem" }}
            color="info"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
