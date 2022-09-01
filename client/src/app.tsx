import { useRoutes } from "react-router";
import Gnb from "./components/gnb";
import { routes } from "./router";

const App = () => {
  const elem = useRoutes(routes);

  return (
    <>
      <Gnb />
      {elem}
    </>
  );
};

export default App;
