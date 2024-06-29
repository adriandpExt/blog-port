import { Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { styled } from "@mui/material/styles";

interface FooterProps {
  menuLabel: string[];
}

const MuiFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "5rem 7rem",
}));

export const Footer = (props: FooterProps): ReactElement => {
  const { menuLabel } = props;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getYear = (): number => {
    const date = new Date();

    return date.getFullYear();
  };

  return (
    <MuiFooter>
      <Grid container padding={5} textAlign={"justify"} spacing={10}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde quam animi sed magni reprehenderit ratione fugiat laudantium
          impedit corrupti. Doloribus quisquam repellendus ratione molestiae
          dolor asperiores? Corporis, dolor sint.
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere est
          eveniet nostrum repudiandae nemo illum eum, aperiam unde neque.
          Aliquid quaerat harum asperiores magni distinctio tempora dolorum
          praesentium quia!
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <Typography
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
            variant="subtitle1"
            color="white"
            onClick={() => scrollToSection("home")}
          >
            @ {getYear()} Adrian Del Prado
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Stack direction={"row"} gap={4}>
            {menuLabel?.map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#fff",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </MuiFooter>
  );
};

export default Footer;
