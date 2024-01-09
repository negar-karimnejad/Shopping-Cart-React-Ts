import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { routes } from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="md:w-4/5 px-3 md:px-0 mx-auto">{router}</div>
    </ShoppingCartProvider>
  );
}

export default App;
