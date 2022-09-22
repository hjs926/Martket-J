import GlobalLayout from "./pages/_layout";
import Index from "./pages/index";
import CartIndex from "./pages/cart/index";
import ProductsIndex from "./pages/products/index";
import Id from "./pages/products/[id]";
import LoginIndex from "./pages/login/login";
import CommunityPage from "./pages/community";
import SignUpPage from "./pages/login/signup";
import AdminIndex from "./pages/admin/index";
import CreateBorad from "./components/community/writeBorad";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/cart", element: <CartIndex />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <Id /> },
      { path: "/login", element: <LoginIndex /> },
      { path: "/community", element: <CommunityPage /> },
      { path: "/community/write", element: <CreateBorad /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/admin", element: <AdminIndex />, index: true },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/products" },
  { route: "/products/:id" },
  { route: "/login" },
  { route: "/signup" },
  { route: "/community" },
  { route: "/signup" },
];
