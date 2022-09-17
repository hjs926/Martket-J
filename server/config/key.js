import dev from "./dev.js";
import prod from "./prod.js";

const config = () => {
  if (process.env.NODE_ENV === "production") {
    return prod();
  } else {
    return dev();
  }
};

export default config;
