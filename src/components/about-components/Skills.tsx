import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactElement } from "react";
import theme from "~/theme";
import { SvgIcons } from "../svg-icons";
import { IconName } from "../svg-icons/utils";

interface SkillsProps {
  skills: IconName[];
  title: string;
}

export const Skills = (props: SkillsProps): ReactElement => {
  const { skills, title } = props;

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#FFF",
        padding: 1,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: 5,
          ":hover": {
            backgroundColor: "#FFF",
          },
        }}
      >
        <Typography variant="h6" textAlign={"center"} fontWeight={600}>
          {title}
        </Typography>
        <Divider />
        <Box padding={5}>
          <Grid container spacing={5} justifyContent="center">
            {skills.map((item) => (
              <Grid
                item
                xs={isSmallScreen ? 4 : Math.min(12 / skills.length, 3)}
                key={item}
              >
                <SvgIcons name={item} height={60} width={60} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider />
      </Box>
    </Paper>
  );
};

export default Skills;
