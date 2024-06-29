import { Box, Button, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

// import imageHero from "~/assets/images/image-hero-desktop.png";
import theme from "~/theme";

const Home = (): ReactElement => {
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
          margin: "5rem 3rem 10rem 3rem",
        }}
      >
        <Stack
          gap={2}
          padding={5}
          sx={{ color: theme.palette.background.default }}
        >
          <Typography variant="h3">Hey!</Typography>
          <Typography
            sx={{
              color: theme.palette.background.default,
             
            }}
            variant="h3"
          >
            Adrian Del Prado
          </Typography>

          <Typography
            sx={{ color: theme.palette.background.default }}
            variant="h5"
          >
            Frontend Developer | Software Developer
          </Typography>

          <Typography variant="h6" textAlign={"justify"}>
            Frontend developer crafting clean, elegant, and efficient code,
            ensuring robust and visually appealing solutions.
          </Typography>

          <Button variant="contained" sx={{ width: "10rem" }} color="info">
            Learn More
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
