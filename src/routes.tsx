import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/store", element: <Store /> },
];
