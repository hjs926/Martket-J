import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRoutes } from "react-router";
import Footer from "./components/footer";
import Gnb from "./components/gnb";
import GlobalStyle from "./GlobalStyle";
import { getClient } from "./queryClient";
import { routes } from "./router";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Gnb />
      {elem}
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
