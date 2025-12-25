import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ConnectWithMe from "./pages/ConnectWithMe";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/connect" element={<ConnectWithMe />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
