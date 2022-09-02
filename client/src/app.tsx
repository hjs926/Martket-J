import { useRoutes } from "react-router";
import Gnb from "./components/gnb";
import GlobalStyle from "./GlobalStyle";
import { routes } from "./router";

const App = () => {
  const elem = useRoutes(routes);

  return (
    <>
      <GlobalStyle />
      <Gnb />
      {elem}
    </>
  );
};

export default App;
