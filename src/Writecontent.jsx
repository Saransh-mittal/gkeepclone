import React, { useState } from "react";

const Writecontent = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  let [show,setShow] = useState(false);

  const InputEvent = (event) =>{
    const {name,value} = event.target;
    setNote((preValue)=>{
      return {
        ...preValue,
        [name] : value,
      };
    })
  };

  const onSubmit =() =>{
    setNote(()=>{
      return {
        title : "",
        content: "",
      };
    })
    props.passNote(note);
  };

  const expand = () =>{
    setShow(true);
  };

  const contract = () =>{
    setShow(false);
  };

  return (
    <>
      <div onDoubleClick={contract} className="bg-white mt-6 mb-8 w-[35%] relative rounded-md shadow-md shadow-slate-400 mx-auto">
        <input
        onClick={expand}
          name="title"
          onChange={InputEvent}
          className="text-xl font-semibold mt-3 mb-3 ml-3 outline-0 w-[90%]"
          placeholder="Title"
          value={note.title}
        ></input>
        { show &&
        <textarea
          name="content"
          onChange={InputEvent}
          placeholder="write a note..."
          className="text-md w-[90%] h-44 outline-0 ml-4"
          value={note.content}
        ></textarea>
        }
        { show &&
        <button onClick={onSubmit} className="absolute -bottom-5 right-1 h-12 w-12 rounded-full text-4xl flex justify-center items-center pb-2 pr-1 text-yellow-300 font-semibold shadow-lg shadow-slate-500 bg-white">
          +
        </button>}
      </div>
    </>
  );
};

export default Writecontent;
