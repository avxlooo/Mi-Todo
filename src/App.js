import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewTask from "./components/NewTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
};

export default App;
