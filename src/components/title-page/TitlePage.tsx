import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

export const TitlePage = (props: {
  title: string;
  textAlign?: string;
}): ReactElement => {
  const { title, textAlign = "left" } = props;

  return (
    <Typography variant="h1" sx={{ textAlign: textAlign }}>
      {title}
    </Typography>
  );
};

export default TitlePage;
