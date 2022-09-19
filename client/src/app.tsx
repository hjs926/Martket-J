import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { useRoutes } from "react-router";
import styled from "styled-components";
import Footer from "./components/footer";
import Gnb from "./components/gnb";
import GlobalStyle from "./GlobalStyle";
import { getClient } from "./queryClient";
import store from "./redux";
import { routes } from "./router";

const Wrap = styled.div`
  height: auto;
  min-height: 100%;
`;

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  console.log("app.");

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <Wrap className="wrap">
          <Gnb />
          {elem}
          <Footer />
        </Wrap>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
