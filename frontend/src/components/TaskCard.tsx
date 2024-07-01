import React, { useRef, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import Select from "./Select";

interface TaskCardProps{
  id : string,
  task : string
}


const TaskCard =  ({id ,task} : TaskCardProps) => {

  const [selectModal , setSelectModal] = useState(false);

    const handleClick = ()=>{
        setSelectModal((prev)=>!prev);
    }   


    const clickedOutsideRef = useRef<React.RefAttributes<HTMLDivElement>>(null);

    const handleRef = (event : React.MouseEvent) => {
      if(clickedOutsideRef.current && !clickedOutsideRef.current.contains(event.target)){
        setSelectModal(false);
      }
    }


    

  return (
    <div className="flex-col w-full bg-white p-2 border border-gray-400 border-solid rounded-xl items-center"  onClick={handleRef}>
      <p className="text-sm font-semibold overflow-hidden">{task}</p>
      <div className="flex justify-end pt-2" >
        <div className="cursor-pointer "  ref={clickedOutsideRef}>
            <FaEllipsisH onClick={handleClick}/>
          {selectModal && <Select id={id} />}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
