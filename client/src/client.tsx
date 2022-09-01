import { QueryClient } from "@tanstack/react-query";

const getClient = (() => {
  // 처음 client는 null로 설정한다
  let client: QueryClient | null = null;
  return () => {
    return client;
  };
})();

export default getClient;
