import type { DrawerMenuProps } from "./types";

import { ReactElement, useCallback, useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import logo from "~/assets/logo.png";
import useStore from "~/store/useStore";

import { debounce } from "./utils";
import theme from "~/theme";
import Button from "@mui/material/Button";

const MuiBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: 300,
  height: "100%",
  padding: "5rem 2rem ",
}));

export const DrawerMenu = (props: DrawerMenuProps): ReactElement => {
  const { menuLabel, open, onClose } = props;

  const { activeSection, setActiveSection, scrollToSection } = useStore();

  const isScrolling = useRef<boolean>(false);

  const handleScroll = useCallback((): void => {
    if (isScrolling.current) return;

    const sections = menuLabel.map((label) => document.getElementById(label));
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  }, [menuLabel, setActiveSection]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [handleScroll]);

  const DrawerList = () => {
    return (
      <Stack>
        {menuLabel.map((text) => (
          <Button
            key={text}
            onClick={() => scrollToSection(text)}
            sx={{
              color: theme.palette.background.paper,
              fontWeight: 600,
              borderLeft:
                activeSection === text
                  ? `4px solid ${theme.palette.background.paper}`
                  : "",
              borderRight:
                activeSection === text
                  ? `4px solid ${theme.palette.background.paper}`
                  : "",
              transition: "all 0.5s ease",
            }}
          >
            {text.toUpperCase()}
          </Button>
          // <ListItem key={text} onClick={() => scrollToSection(text)}>
          //   <ListItemButton
          //     sx={{
          //       borderLeft:
          //         activeSection === text
          //           ? `4px solid ${theme.palette.background.paper}`
          //           : "",
          //       transition: "all 0.5s ease",

          //       // "&:hover": {
          //       //   transform: "translateY(-4px)",
          //       //   borderLeft: "none",
          //       //   border: `.2rem solid ${theme.palette.background.paper}`,
          //       //   boxShadow: `0px 4px 10px ${theme.palette.background.paper}`,
          //       //   borderRadius: "0.3rem 1.5rem .3rem 1.5rem",
          //       // },
          //     }}
          //   >
          //     <ListItemText primary={text.toUpperCase()} />
          //   </ListItemButton>
          // </ListItem>
        ))}
      </Stack>
    );
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <MuiBox role="presentation" onClick={onClose} onKeyDown={onClose}>
        <Stack direction={"row"} alignItems={"center"}>
          <img src={logo} alt="logo" width={100} height={100} />
          <Typography
            fontFamily="Ransock"
            variant="h4"
            sx={{ color: "#2F3645" }}
          >
            ADRIAN
          </Typography>
        </Stack>

        {DrawerList()}
        <Divider />
      </MuiBox>
    </Drawer>
  );
};

export default DrawerMenu;
