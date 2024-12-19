import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // Routes 추가
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes> {/* Routes로 감싸기 */}
        <Route path="/" element={<Home />} /> {/* component 대신 element 사용 */}
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
