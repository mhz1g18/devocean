import { FC } from "react";
import { ApiData } from "../util/types";

interface ListViewProps {
  headings: string[];
  data: ApiData[];
  onClick: Function;
}

interface HeaderProps {
  fields: string[];
}

interface BodyProps {
  data: ApiData[];
  onClick: Function;
}

const ListView: FC<ListViewProps> = ({ headings, data, onClick }) => {
  return (
    <div className="listview">
      <Header fields={headings} />
      <Body data={data} onClick={onClick} />
    </div>
  );
};

export default ListView;

const Header: FC<HeaderProps> = ({ fields }) => {
  return (
    <div className="listview-header row">
      {fields.map((heading, idx) => (
        <div key={`heading-${idx}`} className="row-item">
          {heading}
        </div>
      ))}
    </div>
  );
};

const Body: FC<BodyProps> = ({ data, onClick }) => {
  return (
    <div className="listview-body">
      {data.map((item, idx) => (
        <div key={`item-${idx}`} className="row" onClick={() => onClick(item)}>
          <div className="row-item">{item.name}</div>
          <div className="row-item">{item.description}</div>
        </div>
      ))}
    </div>
  );
};
