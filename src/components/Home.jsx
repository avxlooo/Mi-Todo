import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("http://localhost:8000/activities");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <p>Home</p>
    </div>
  );
};

export default Home;
