import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default PageWrapper;
