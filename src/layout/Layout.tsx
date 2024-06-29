import { PropsWithChildren, ReactElement } from "react";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import { Appbar, Footer } from "~/components";

const StyledContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const Layout = (props: PropsWithChildren): ReactElement => {
  const { children } = props;

  const label = ["home", "about", "works", "contact"];
  return (
    <>
      <Appbar menuLabel={label} />
      <StyledContainer>{children}</StyledContainer>
      <Footer menuLabel={label} />
    </>
  );
};

export default Layout;
