import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";


const TaskModal = () => {

    const { data, setData } = useContext(DataContext);
    const [newTask, setNewTask] = useState<string>("");
  
    const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  
    console.log("data : ", data);
  
    const clickedOutsideRef = useRef<React.RefAttributes<HTMLDivElement>>(null);
  
    const handleAddTask = () => {
      setNewTaskModal(true);
    };
  
    const handleNewTaskButton = () => {
      const Task = {
        id: uuidv4(),
        task: newTask,
        category: "todo",
      };
  
      setData([...data, Task]);
      setNewTaskModal(false);
      setNewTask("");
    };
  
    const handleClickOutside = (e: React.MouseEvent) => {
      if (
        clickedOutsideRef.current &&
        !clickedOutsideRef.current.contains(e.target)
      ) {
        setNewTaskModal(false);
      }
    };
  
    const handleChangeNewTask = (event: React.ChangeEvent) => {
      setNewTask(event.target.value);
    };

  return (
    <div
      className="w-full h-screen flex justify-around items-center z-10 flex-col bg-black bg-opacity-40 fixed top-0 left-0"
      onClick={handleClickOutside}
    >
      <div className=" w-5/12 bg-white p-8" ref={clickedOutsideRef}>
        <p className="font-bold">Add a new task</p>
        <div className="flex flex-col">
          <textarea
            placeholder="Task Details..."
            className="p-2 border border-gray-300 mt-2 mb-2"
            value={newTask}
            onChange={handleChangeNewTask}
          />
          <button
            onClick={handleNewTaskButton}
            className="pb-2 pt-2  font-bold text-sm border bg-slate-300 "
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
