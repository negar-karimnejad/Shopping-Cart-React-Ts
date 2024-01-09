import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

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
