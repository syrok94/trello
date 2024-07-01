import { FaTrash, FaCopy, FaEdit, FaArrowRight } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";


interface SelectProps {
  id: string;
}

const Select = ({ id }: SelectProps) => {
  const { data, setData } = useContext(DataContext);

  const [editModal, setEditModal] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>("");

  const clickedOutsideRef = useRef<React.RefAttributes<HTMLDivElement>>(null);

  const handleEditTaskButton = () => {

    for(let i = 0 ; i < data.length ; i++){

      if(data[i].id === id){
        data[i].task = editTask;
      }
    }
    setData([...data]);
    setEditModal(false);
    setEditTask("");
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (
      clickedOutsideRef.current &&
      !clickedOutsideRef.current.contains(e.target)
    ) {
      setEditModal(false);
    }
  };

  const handleEditTask = (event: React.ChangeEvent) => {
    setEditTask(event.target.value);
  };

  const handleDelete = () => {
    console.log("delete");

    const newData = data.filter((item: { id: string }) => item.id !== id);
    setData(newData);
  };

  const handleEdit = () => {

    for(let i = 0 ; i < data.length ; i++){

      if(data[i].id === id){
        setEditTask(data[i].task);
      }
    }
    
    setEditModal(true);
  };

  const handleMove = () => {};

  const handleCopy = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        navigator.clipboard.writeText(data[i].task);
      }
    }
  };

  return (
    <div className="flex flex-col w-24 absolute border rounded-xl bg-white z-50 p-1">
      <div
        className="flex w-full flex-row justify-around self-baseline items-center text-sm p-1 hover:bg-slate-200"
        onClick={handleEdit}
      >
        <FaEdit className="w-4 h-4" /> <span className="pl-1">Edit</span>
      </div>
      <div
        className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"
        onClick={handleDelete}
      >
        <FaTrash className="w-4 h-4" /> <span className="pl-1">Delete</span>
      </div>
      <div
        className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"
        onClick={handleCopy}
      >
        <FaCopy className="w-4 h-4 " /> <span className="pl-1">Copy</span>
      </div>
      <div
        className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"
        onClick={handleMove}
      >
        <FaArrowRight className="w-4 h-4 " /> <span className="pl-1">Move</span>
      </div>

      {editModal && (
        <div
          className="w-full h-screen flex justify-around items-center z-10 flex-col bg-black bg-opacity-40 fixed top-0 left-0"
          onClick={handleClickOutside}
        >
          <div className=" w-5/12 bg-white p-8" ref={clickedOutsideRef}>
            <p className="font-bold">Edit Task</p>
            <div className="flex flex-col">
              <textarea
                placeholder="Task Details..."
                className="p-2 border border-gray-300 mt-2 mb-2 "
                value={editTask}
                onChange={handleEditTask}
              />
              <button
                onClick={handleEditTaskButton}
                className="pb-2 pt-2  font-bold text-sm border bg-slate-300 "
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
