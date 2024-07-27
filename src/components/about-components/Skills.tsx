import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
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

            padding: 2,
            ":hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            textAlign={"center"}
            sx={{ marginBottom: 3 }}
          >
            {title}
            <Divider />
          </Typography>

          <Grid
            container
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {skills.map((item) => (
              <SvgIcons key={item} name={item} height={60} width={60} />
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Skills;
