import { Route, Routes } from "react-router-dom";
import Hamburger from "./components/hamburger";
import HomePage from "./homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hamburger" element={<Hamburger />} />
    </Routes>
  );
}

export default App;
