import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreateProductPage from "./pages/CreateProductPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/create"} element={<CreateProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
