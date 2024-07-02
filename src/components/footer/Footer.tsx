import { ReactElement } from "react";

import { Grid, IconButton, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

import { IconName } from "../svg-icons/utils";

import { SvgIcons } from "../svg-icons";

import { socialLinksFooter } from "./utils";

interface FooterProps {
  menuLabel: string[];
}

const MuiFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "5rem 7rem",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
  fontFamily: "Ransock",
  ":hover": {
    cursor: "pointer",
  },
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

  const handleNavigate = (url: string) => {
    return window.open(url, "_blank");
  };

  const renderLinks = (): ReactElement => {
    return (
      <Stack direction={"row"} gap={2}>
        {socialLinksFooter.map((item) => (
          <IconButton
            onClick={() => handleNavigate(item.url)}
            key={item.iconName}
          >
            <SvgIcons name={item.iconName as IconName} height={40} width={40} />
          </IconButton>
        ))}
      </Stack>
    );
  };

  const renderFooterMenu = (): ReactElement => {
    return (
      <Stack direction={"row"} gap={4}>
        {menuLabel?.map((item) => (
          <StyledTypography key={item} onClick={() => scrollToSection(item)}>
            {item}
          </StyledTypography>
        ))}
      </Stack>
    );
  };
  return (
    <MuiFooter>
      <Grid container padding={5} textAlign={"justify"} spacing={10}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Stack>
            <StyledTypography>adriandp52@gmail.com</StyledTypography>
            <StyledTypography>Laguna, Philippines</StyledTypography>
            <StyledTypography>+63 926 391 2007</StyledTypography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {renderLinks()}
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <StyledTypography
            variant="subtitle1"
            onClick={() => scrollToSection("home")}
          >
            &copy; {getYear()} Adrian Del Prado
          </StyledTypography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          {renderFooterMenu()}
        </Grid>
      </Grid>
    </MuiFooter>
  );
};

export default Footer;
