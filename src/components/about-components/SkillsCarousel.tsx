import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { texts } from "./utils";

const MarqueeContainer = styled(Box)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  position: "relative",
});

const MarqueeWrapper = styled(Box)({
  display: "inline-block",
  whiteSpace: "nowrap",
  position: "absolute",
  animation: "marquee 20s linear infinite",

  "@keyframes marquee": {
    from: {
      transform: " translateX(100%)",
    },
    to: {
      transform: "translateX(-100%)",
    },
  },
});

const MarqueeText = styled(Typography)({
  display: "inline-block",
  paddingRight: "100%",
  fontFamily: "Ransock",
});

export const SkillsCarousel = (): ReactElement => {
  const displayTexts = texts.join(" \u00A0 \u00A0 \u00A0 \u00A0");

  return (
    <MarqueeContainer
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      height="100px"
      padding="2rem"
    >
      <MarqueeWrapper>
        <MarqueeText variant="h3">{displayTexts}</MarqueeText>
      </MarqueeWrapper>
    </MarqueeContainer>
  );
};

export default SkillsCarousel;
