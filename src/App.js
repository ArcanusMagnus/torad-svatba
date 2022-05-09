import { Routes, Route } from "react-router-dom";
import Home from "./components/Content/Home";
import Program from "./components/Content/Program";
import Dotaznik from "./components/Content/Dotaznik";
import Kontakt from "./components/Content/Kontakt";
import Header from "./components/Layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/dotaznik" element={<Dotaznik />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
}

export default App;
