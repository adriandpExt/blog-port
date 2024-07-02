import { ReactElement, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import {
  AnimatedIcon,
  TitlePage,
  WorksCard,
  WorksExperience,
} from "~/components";

import { projectsList, workData } from "./utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Works = (): ReactElement => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const renderWorkExperience = (): ReactElement => {
    return (
      <Stack direction={"row"} gap={2}>
        {workData.map((data, id) => (
          <motion.div variants={itemVariants} key={id}>
            <WorksExperience data={data} />
          </motion.div>
        ))}
      </Stack>
    );
  };

  const renderProjects = (): ReactElement => {
    return (
      <Grid container spacing={4}>
        {projectsList?.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <motion.div variants={itemVariants}>
              <WorksCard
                image={item.image}
                title={item.title}
                tech={item.tech}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <motion.div
      id="works"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Stack gap={5} sx={{ padding: 10 }}>
        <TitlePage textAlign="right" title="works." />

        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <AnimatedIcon icon="cmd" size={60} />
          <Typography variant="h5">Work Experience</Typography>
        </Stack>
        {renderWorkExperience()}

        <Stack gap={2}>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <AnimatedIcon icon="block" size={60} />
            <Typography variant="h5">
              Check out some of my latest projects.
            </Typography>
          </Stack>

          <Typography variant="subtitle1">
            I've worked at start-ups, tech companies and corporates on a range
            of different projects, including design systems, websites and apps.
          </Typography>
        </Stack>

        {renderProjects()}
      </Stack>
    </motion.div>
  );
};

export default Works;
