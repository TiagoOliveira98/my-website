import { Route, Routes } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Courses from "./pages/Courses";
import MyJourney from "./pages/MyJourney";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/my-journey" element={<MyJourney />}/>
      <Route path="/certs" element={<Courses />}/>
    </Routes>
  );
}

export default App;
