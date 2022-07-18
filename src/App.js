import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewTask from "./components/NewTask";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask />} />
      </Routes>
    </div>
  );
};

export default App;
