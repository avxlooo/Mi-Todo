import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Task from "./Task";
import useFetch from '../Custom hook/useFetch.jsx'

const Home = () => {
  const { data, fetching } = useFetch("http://localhost:8080/activities");

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
