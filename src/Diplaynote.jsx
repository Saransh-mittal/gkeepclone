import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Displaynote = (props) => {
  return (
    <>
      <div className="bg-white w-[20%] h-32 my-3 mx-5 rounded-md shadow-md shadow-slate-300/70 overflow-auto relative">
        <h1 className="text-xl font-semibold p-2"> {props.ele.title} </h1>
        <p className="pl-2">{props.ele.content}</p>
        <button
          onClick={()=>{props.ondel(props.id)}}
          className="absolute bottom-1 right-1 h-9 w-9 rounded-full flex justify-center items-center text-yellow-300 shadow-lg shadow-slate-500/30 bg-white"
        >
          <DeleteOutlineIcon/>
        </button>
      </div>
    </>
  );
};

export default Displaynote;
