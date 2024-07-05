import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";

import { SvgIcons } from "../svg-icons";
import { IconName } from "../svg-icons/utils";
import theme from "~/theme";

interface SkillsProps {
  skills: IconName[];
  title: string;
}

export const Skills = (props: SkillsProps): ReactElement => {
  const { skills, title } = props;

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#fff",
          padding: 1,
        }}
      >
        <CardContent
          sx={{
            backgroundColor: theme.palette.background.default,
            padding: 1,
            ":hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <Typography variant="h6" fontWeight={600} sx={{ marginBottom: 3 }}>
            {title}
          </Typography>

          <Grid container spacing={1}>
            {skills.map((item) => (
              <SvgIcons name={item} height={60} width={60} />
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Skills;
