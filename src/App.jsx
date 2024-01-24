import { Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";
import Budget from "./components/Budget/Budget";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </>
  );
}

export default App;
