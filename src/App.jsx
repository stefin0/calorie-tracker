import { Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/Navbar/Navbar";
import Budget from "./components/Budget/Budget";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
