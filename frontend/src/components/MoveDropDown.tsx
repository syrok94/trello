import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface MoveDropDownProps {
  id: string;
}

const MoveDropDown: React.FC<MoveDropDownProps> = ({
  id,
}: MoveDropDownProps) => {

  const {data , setData} = useContext(DataContext);

  const handleMoveToDone = () => {
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].id === id){
        data[i].category = "done";
      }
    }
    setData([...data]);
  };
  const handleMoveToTodo = () => {
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].id === id){
        data[i].category = "todo";
      }
    }
    setData([...data]);
  };
  const handleMoveToInProgress = () => {
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].id === id){
        console.log("cat : " , data[i].category);
        
        data[i].category = "inProgress";
      }
    }

    setData([...data]);
  };
  const handleMoveToReview = () => {
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].id === id){
        data[i].category = "review";
      }
    }
    setData([...data]);
  };

  return (
    <div className="flex flex-col w-24 absolute border rounded-xl bg-white z-50 p-1 left-full top-1/2">
      <div
        className="flex w-full flex-row justify-around self-baseline items-center text-sm p-1 hover:bg-slate-200"
        onClick={handleMoveToTodo}
      >
        Todo
      </div>
      <div
        className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"
        onClick={handleMoveToInProgress}
      >
        In Progress
      </div>
      <div
        className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"
        onClick={handleMoveToReview}
      >
        Review
      </div>
      <div
        className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"
        onClick={handleMoveToDone}
      >
        Done
      </div>
    </div>
  );
};

export default MoveDropDown;
