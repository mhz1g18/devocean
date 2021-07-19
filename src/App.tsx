import "./App.css";
import Header from "./components/Header";
import { Switch, HashRouter, Route } from "react-router-dom";
import ListViewPage from "./pages/ListViewPage";
import { Provider } from "react-redux";
import { store } from "./redux";
import DetailViewPage from "./pages/ItemViewPage";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <ListViewPage />
          </Route>
          <Route path="/:id">
            <DetailViewPage />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
