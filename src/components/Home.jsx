import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Task from "./Task";

const Home = () => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  async function getData() {
    const response = await fetch("http://localhost:8000/activities");
    const data = await response.json();
    setData(data);
    setFetching(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      {fetching && <div className="message">fetching tasks...</div>}
      <div className="container">
        {data &&
          data.map((task) => (
            <Task
              key={task.id}
              to_do={task.to_do}
              time={task.time}
              set_reminder={task.set_reminder}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
