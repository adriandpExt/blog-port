import { ReactElement, useEffect, useState, useCallback, useRef } from "react";
import MuiAppbar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import logo from "~/assets/logo.png";
import theme from "~/theme";

const StyledMuiAppBar = styled(MuiAppbar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "5rem",
}));

interface AppbarProps {
  menuLabel: string[];
}

const debounce = (func: () => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(), wait);
  };
};

export const Appbar = (props: AppbarProps): ReactElement => {
  const { menuLabel } = props;

  const [activeSection, setActiveSection] = useState<string>("home");
  const isScrolling = useRef<boolean>(false);

  const themes = useTheme();
  const isSmallScreen = useMediaQuery(themes.breakpoints.down("md"));

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      isScrolling.current = true;
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
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

  return (
    <StyledMuiAppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack gap={1} direction={"row"} alignItems={"center"}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.background.default,
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => scrollToSection("home")}
          >
            <img src={logo} alt="logo" width={50} height={50} />
          </Avatar>
          {!isSmallScreen && (
            <Typography variant="h5" fontFamily="Ransock">
              ADRIAN.
            </Typography>
          )}
        </Stack>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {menuLabel?.map((item) => (
            <Button
              key={item}
              sx={{
                color: activeSection === item ? "#EEEDEB" : "#fff",
                borderBottom:
                  activeSection === item ? "3px solid #EEEDEB" : "none",
              }}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default Appbar;
