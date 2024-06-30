import { useState } from "react";
import { FaEllipsisH, FaTrash } from "react-icons/fa";
import Select from "./Select";

const TaskCard = ({task , onDelete , onEdit , onMove , onCopy , id}) => {

    const [selectModal , setSelectModal] = useState(false);

    const handleClick = ()=>{
        setSelectModal((prev)=>!prev);
    }   


  return (
    <div className="flex-col w-full bg-white p-2 border border-gray-400 border-solid rounded-xl items-center">
      <p className="text-sm font-semibold">{task}</p>
      <div className="flex justify-end pt-2">
        {/* <div>
          <FaTrash className="text-sm cursor-pointer" onClick={()=>onDelete(id)} />
        </div> */}
        <div className="cursor-pointer ">
            <FaEllipsisH onClick={handleClick}/>
          {selectModal && <Select id={id} onDelete={onDelete} onEdit={onEdit} onCopy={onCopy} onMove={onMove} />}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
