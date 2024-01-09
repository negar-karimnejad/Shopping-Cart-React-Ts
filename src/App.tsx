import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Navbar />
      <div className="md:w-4/5 px-3 md:px-0 mx-auto">{router}</div>
    </>
  );
}

export default App;
