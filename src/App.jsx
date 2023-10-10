import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Project from "./components/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import ProjectPage from "./pages/ProjectPage";
import Project from "./components/Project";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<Projects />}/>
          <Route path=":projectId" element={<Project />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
