/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useRef, useState } from "react";
import TaskCard from "./TaskCard";
import { DataContext } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";

interface ListProps {
  name: string;
}

const List = ({ name }: ListProps) => {
  const { data, setData } = useContext(DataContext);
  const [newTask, setNewTask] = useState<string>("");

  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);

  const clickedOutsideRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      clickedOutsideRef.current &&
      !clickedOutsideRef.current.contains(e.target as Node)
    ) {
      setNewTaskModal(false);
    }
  };

  const handleChangeNewTask = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="w-1/4 h-fit p-2 bg-gray-200 border rounded-xl ml-2 mr-2">
      <h1 className="font-bold pb-2">{name}</h1>
      <ul className="h-auto">
        {data.length > 0 &&
          data.map((item: { id: string; task: string; category: string }) => {
            return (
              <li className="mb-2" key={item.id}>
                {name === item.category && (
                  <TaskCard id={item.id} task={item.task} />
                )}
              </li>
            );
          })}
      </ul>

      <div
        className="w-20 font-medium text-gray-500 pb-2 text-sm font pr-2 cursor-pointer"
        onClick={handleAddTask}
      >
        + Add Task
      </div>

      {newTaskModal && (
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
                className="pb-2 pt-2 font-bold text-sm border bg-slate-300 "
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
