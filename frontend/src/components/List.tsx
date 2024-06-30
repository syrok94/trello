import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const List = ({ name }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://dummyjson.com/todos?limit=5&skip=10"
    );
    const res = await response.json();
    console.log(res.todos);
    
    setData(res.todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const newData = data.filter((item) => item.id !== id);
    return setData(newData);
  };

  const handleEdit=()=>{}
  
  const handleMove=()=>{}

  const handleCopy=(id)=>{
      for(let i = 0 ; i < 5 ; i++){
        if(data[i].id === id){
         navigator.clipboard.writeText(data[i].todo);
        }
      }

      
  }

  return (
    <div className="w-1/4 h-fit p-2 bg-gray-200 border rounded-xl ml-2 mr-2">
      <h1 className="font-bold pb-2">{name}</h1>
      <ul className="h-auto">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <li className="mb-2" key={item.id}>
                <TaskCard
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onMove={handleMove}
                  onCopy={handleCopy}
                  id={item.id}
                  task={item.todo}
                />
              </li>
            );
          })}
      </ul>

      <p className="font-medium text-gray-500 pb-2 text-sm font text-right pr-2 cursor-pointer">
        + Add Card
      </p>
    </div>
  );
};

export default List;
