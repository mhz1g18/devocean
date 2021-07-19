import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import ListView from "../components/ListView";
import PageWrapper from "../components/PageWrapper";
import { actionCreators, State } from "../redux";
import { ApiData } from "../util/types";

const headings = ["Name", "Description"];

const ListViewPage: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loadItems, setActiveItem } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const { items, loading, error } = useSelector((state: State) => state.app);

  const onClickHandler = (item: ApiData) => {
    setActiveItem(item);
    history.push(`/${item.id}`);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <PageWrapper>
      <ListView headings={headings} data={items} onClick={onClickHandler} />
    </PageWrapper>
  );
};

export default ListViewPage;
