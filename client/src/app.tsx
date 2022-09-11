import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { useRoutes } from "react-router";
import styled from "styled-components";
import Footer from "./components/footer";
import Gnb from "./components/gnb";
import GnbRight from "./components/gnbRight";
import GlobalStyle from "./GlobalStyle";
import { getClient } from "./queryClient";
import store from "./redux";
import { routes } from "./router";
// import { UploadProductPage } from "./pages/upload/UploadProductPage";

const Wrap = styled.div`
  height: auto;
  min-height: 100%;
`;

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <Wrap className="wrap">
          <Gnb />
          <GnbRight />
          {elem}
          <Footer />
        </Wrap>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
