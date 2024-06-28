import { Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

import me from "~/assets/images/me_id.png";

const StyledCard = styled(Card)({
  backgroundColor: "#fff",
  padding: 10,
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

const StyledCardMedia = styled(CardMedia)({
  height: 300,
  width: 300,
  objectFit: "cover",
});

export const CardImage = (): ReactElement => {
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledCardMedia image={me} />
      </StyledCardContent>
    </StyledCard>
  );
};

export default CardImage;
