import type { DrawerMenuProps } from "./types";

import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Stack, Typography } from "@mui/material";

import logo from "~/assets/logo.png";

import { debounce } from "./utils";

export const DrawerMenu = (props: DrawerMenuProps): ReactElement => {
  const { menuLabel, open, onClose } = props;

  const [activeSection, setActiveSection] = useState<string>("home");

  const isScrolling = useRef<boolean>(false);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
  }, [menuLabel]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [handleScroll]);

  const DrawerList = (
    <List>
      {menuLabel.map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          onClick={() => scrollToSection(text)}
        >
          <ListItemButton
            key={index}
            sx={{
              borderLeft: activeSection === text ? "4px solid #2F3645" : "",
            }}
          >
            <ListItemText primary={text.toUpperCase()} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 300,
          height: "100%",
          backgroundColor: "#EEEDEB",
          padding: "5rem 2rem ",
        }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
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

        {DrawerList}
        <Divider />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
