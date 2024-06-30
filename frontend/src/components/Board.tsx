import { useEffect, useState } from "react";
import List from "./List";

const Board = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/todos?limit=3&skip=10");
    const res = await response.json();
    setData(res.todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex p-4">
      <List name="To Do" />
      <List name="In Progress" />
      <List name="Review" />
      <List name="Done" />
    </div>
  );
};

export default Board;
