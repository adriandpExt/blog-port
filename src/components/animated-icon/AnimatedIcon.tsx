import { Player } from "@lottiefiles/react-lottie-player";
import { ReactElement } from "react";

import developer from "./developer.json";
import block from "./block.json";
import email from "./email.json";
import cmd from "./cmd.json";
import whatsapp from "./whatsapp.json";
import viber from "./viber.json";

type AnimatedIconName =
  | "developer"
  | "block"
  | "email"
  | "cmd"
  | "whatsapp"
  | "viber";

interface AnimatedIconProps {
  icon: AnimatedIconName;
  size?: number;
}

const iconMapping: { [key in AnimatedIconName]: unknown } = {
  developer,
  block,
  email,
  cmd,
  whatsapp,
  viber,
};

export const AnimatedIcon = (props: AnimatedIconProps): ReactElement => {
  const { icon, size = 100 } = props;

  const iconSrc = iconMapping[icon];
  return (
    <Player
      autoplay
      loop
      src={iconSrc as string}
      style={{ height: size, width: size }}
    />
  );
};

export default AnimatedIcon;
