import { ReactElement } from "react";

import MuiAppbar from "@mui/material/AppBar";
import { Avatar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
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

export const Appbar = (props: AppbarProps): ReactElement => {
  const { menuLabel } = props;

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
          <Avatar sx={{ backgroundColor: theme.palette.background.default }}>
            <img src={logo} alt="logo" width={50} height={50} />
          </Avatar>
          <Typography variant="h5">ADRIAN.</Typography>
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
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default Appbar;
