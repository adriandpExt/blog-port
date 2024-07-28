import { ReactElement, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { CardImage, Skills, SkillsCarousel, TitlePage } from "~/components";
import { backend, details, frontend } from "./utils";

const About = (): ReactElement => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 5 } },
  };

  const renderIntro = (): ReactElement => {
    return (
      <Stack gap={3}>
        <Typography variant="h5">
          A Frontend Developer and Software Developer.
        </Typography>

        <motion.div animate={{ x: [0, 100, 0] }}>
          <Stack gap={5}>
            <Typography textAlign={"justify"}>{details.intro1}</Typography>

            <Typography textAlign={"justify"}>{details.intro2}</Typography>
          </Stack>
        </motion.div>
      </Stack>
    );
  };

  return (
    <motion.div
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Stack gap={5} sx={{ padding: 10 }}>
        <TitlePage title="about." />

        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} display={"flex"} justifyContent={"center"}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <CardImage />
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            {renderIntro()}
          </Grid>
        </Grid>

        <Divider color="whitesmoke" />

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <Skills title="FRONTEND" skills={frontend} />
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <Skills title="BACKEND" skills={backend} />
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
      <SkillsCarousel />
    </motion.div>
  );
};

export default About;
