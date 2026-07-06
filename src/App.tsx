import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeRoutes from "./routes/HomepageRoutes/HomeRoutes";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
function App() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <ReactFlagsSelect
        selected={selected}
        countries={["US", "UZ", "Ru"]}
        onSelect={(code) => setSelected(code)}
      />
      ;
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
