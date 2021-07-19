import { FC } from "react";
import { MAIN_PURPLE } from "../util/contats";

interface Props {
  size?: number;
  color?: string;
}

const Icon: FC<Props> = ({ size, color }) => {
  return (
    <svg
      width={size || "30"}
      height={size || "30"}
      viewBox="0 0 101 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74 51L26.75 90.8372L26.75 11.1628L74 51Z"
        fill={color || MAIN_PURPLE}
      />
    </svg>
  );
};

export default Icon;
