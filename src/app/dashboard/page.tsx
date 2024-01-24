"use client";

import { Todos } from "@/types";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data.map((item: Todos) => <div key={item.id}>{item.title}</div>)
      )}
    </div>
  );
};

export default Dashboard;
