import NavMenu from "./components/NavMenu";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div>
      <NavMenu className="" />
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Projects data={resumeData.portfolio} />
      <Footer data={resumeData.socialNetworks} />
    </div>
  );
}

export default App;
