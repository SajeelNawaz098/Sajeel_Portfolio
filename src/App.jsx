import { useState, useEffect } from "react";
import Navbar from "./component/navbar";

import Home from "./screens/home";
import About from "./screens/about";
import Experience from "./screens/experience";
import Services from "./screens/services";
import Skills from "./screens/skills";
import Contact from "./screens/contact";

function App() {
  const [activeNav, setActiveNav] = useState("home");

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
  const id = setInterval(() => {
    setTime(
      new Date().toLocaleTimeString("en-PK", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
      })
    );
  }, 1000);

  return () => clearInterval(id);
}, []);

  return (
    <div>
      <Navbar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        time={time}
      />
      <Home />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;