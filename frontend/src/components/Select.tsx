import { FaTrash, FaCopy, FaEdit, FaArrowRight } from "react-icons/fa";
const Select = ({onDelete , onEdit , onCopy , onMove , id}) => {

  return (
    <div className="flex flex-col w-24 absolute border rounded-xl bg-white z-50 p-1">
      <div className="flex w-full flex-row justify-around self-baseline items-center text-sm p-1 hover:bg-slate-200" onClick={()=>onEdit(id)}>
        <FaEdit className="w-4 h-4" /> <span className="pl-1">Edit</span>
      </div>
      <div className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"  onClick={()=>onDelete(id)}>
        <FaTrash className="w-4 h-4" /> <span className="pl-1">Delete</span>
      </div>
      <div className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"  onClick={()=>onCopy(id)}>
        <FaCopy className="w-4 h-4 " /> <span className="pl-1">Copy</span>
      </div>
      <div className="flex flex-row w-full justify-around self-baseline items-center text-sm p-1  hover:bg-slate-200"  onClick={()=>onMove(id)}>
        <FaArrowRight className="w-4 h-4 " /> <span className="pl-1">Move</span>
      </div>
    </div>
  );
};

export default Select;
