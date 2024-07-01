import type { AppbarProps } from "./types";
import {
  ReactElement,
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from "react";

import { styled, useTheme } from "@mui/material/styles";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";

import useMediaQuery from "@mui/material/useMediaQuery";
import MuiAppbar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import logo from "~/assets/logo.png";

import { DrawerMenu } from "./DrawerMenu";
import { debounce } from "./utils";

const StyledMuiAppBar = styled(MuiAppbar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "5rem",
}));

const MuiToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
});

const NavigationBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const MuiAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ":hover": {
    cursor: "pointer",
  },
}));

const MuiIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.background.default,
}));

export const Appbar = (props: AppbarProps): ReactElement => {
  const { menuLabel } = props;

  const [activeSection, setActiveSection] = useState<string>("home");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

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

  const renderBurgerMenu = (): ReactElement => {
    return (
      <Stack gap={1} direction={"row"} alignItems={"center"}>
        <MuiAvatar onClick={() => scrollToSection("home")}>
          <img src={logo} alt="logo" width={50} height={50} />
        </MuiAvatar>
        {!isSmallScreen ? (
          <Typography
            variant="h5"
            fontFamily="Ransock"
            onClick={() => scrollToSection("home")}
            sx={{
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            ADRIAN.
          </Typography>
        ) : (
          <MuiIconButton onClick={() => setOpenDrawer(true)}>
            <MenuSharpIcon fontSize="large" />
          </MuiIconButton>
        )}
      </Stack>
    );
  };

  const renderCenterMenu = (): ReactNode => {
    return (
      !isSmallScreen && (
        <NavigationBox>
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
        </NavigationBox>
      )
    );
  };

  return (
    <StyledMuiAppBar>
      <MuiToolbar>
        {renderBurgerMenu()}

        {renderCenterMenu()}

        <Button
          variant="contained"
          href="https://drive.google.com/file/d/1f4PxPAWm7zZONOFaGRqayO5V4cDpBlTX/view?usp=drive_link"
          download="adrian_del_prado_cv.pdf"
          target="_blank"
          sx={{ width: 200 }}
          color="info"
        >
          <FileDownloadSharpIcon />
          DOWNLOAD CV
        </Button>
      </MuiToolbar>

      <DrawerMenu
        menuLabel={menuLabel}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </StyledMuiAppBar>
  );
};

export default Appbar;
