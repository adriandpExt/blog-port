import { Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { styled } from "@mui/material/styles";

interface FooterProps {
  menuLabel: string[];
}

const MuiFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
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
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde quam animi sed magni reprehenderit ratione fugiat laudantium
          impedit corrupti. Doloribus quisquam repellendus ratione molestiae
          dolor asperiores? Corporis, dolor sint.
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere est
          eveniet nostrum repudiandae nemo illum eum, aperiam unde neque.
          Aliquid quaerat harum asperiores magni distinctio tempora dolorum
          praesentium quia!
        </Grid>
      </Grid>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        padding={5}
        alignItems={"center"}
      >
        <Typography
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
          variant="caption"
          color="white"
          onClick={() => scrollToSection("home")}
        >
          @ {getYear()} Adrian Del Prado
        </Typography>

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
      </Stack>
    </MuiFooter>
  );
};

export default Footer;
