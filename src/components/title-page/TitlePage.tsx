import { ReactElement } from "react";

import Typography from "@mui/material/Typography";

import theme from "~/theme";

export const TitlePage = (props: {
  title: string;
  textAlign?: string;
}): ReactElement => {
  const { title, textAlign = "left" } = props;

  return (
    <Typography
      variant="h1"
      sx={{ textAlign: textAlign, color: theme.palette.background.paper }}
    >
      {title}
    </Typography>
  );
};

export default TitlePage;
