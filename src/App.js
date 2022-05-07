import { Routes, Route } from "react-router-dom";
import Home from "./components/Content/Home";
import Header from "./components/Layout/Header";

import cog_wheel from "./assets/images/float/cog-wheel.png";
import atom from "./assets/images/float/atom.png";

const App = () => {
  return (
    <>
      <Header />
      <img src={cog_wheel} alt="Cog wheel" id="cogwheel" />
      <img src={atom} alt="Atom" id="atom" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
