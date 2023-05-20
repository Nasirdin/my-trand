import { Route, Routes } from "react-router";
import Tshirt from "./tshirt";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Woman from "./woman";
import Blue from "./blue";
import Minus from "./minus";
import Sasuke from "./sasuke";
import Checkout from "./components/checkout";
import { useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);

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
      <Customizer setOpenModal={setOpenModal} />
      {!openModal ? "" : <Checkout openModal={openModal} setOpenModal={setOpenModal} />}
    </main>
  );
}

export default App;
