import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setFetching(false);
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, fetching };
};

export default useFetch;
