import { FC } from "react";

interface BannerProps {
  image: string;
}

const Banner: FC<BannerProps> = ({ image }) => {
  return (
    <div
      className="image-holder"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default Banner;
