import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home";
import WeaponRandom from "./pages/WeaponRandom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/weapon-random" element = {<WeaponRandom />} />

      </Routes>
    </BrowserRouter>
  
  );
}

export default App