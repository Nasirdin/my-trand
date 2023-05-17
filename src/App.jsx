import { Route, Routes } from "react-router";
import Tshirt from "./Tshirt";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Woman from "./woman";
import Blue from "./blue";
import Minus from "./minus";
import Sasuke from "./sasuke";
function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Routes>
        <Route path="/" element={<Tshirt />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/minus" element={<Minus />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/sasuke" element={<Sasuke />} />
      </Routes>
      <Customizer />
    </main>
  );
}

export default App;
