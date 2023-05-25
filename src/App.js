import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Writecontent from "./Writecontent";
import Displaynote from "./Diplaynote";
const App = () => {
  let [noteArr, setNoteArr] = useState([]);

  const addElement = (note) => {
    setNoteArr((preValue) => {
      return [...preValue, note];
    });
  };

  const deleteElement = (id) => {
    setNoteArr((oldData) =>
    oldData.filter((currData,idx) => {
      return idx!==id;
    })
  )
  };

  return (
    <>
      <div className="h-screen w-screen bg-slate-100 overflow-auto">
        <Header />
        <Writecontent passNote={addElement} />
        <div className="mx-auto flex min-h-[40%] flex-wrap mb-10 pl-16">
          {noteArr.map((currEle, index) => {
            return (
              <Displaynote
                ondel={deleteElement}
                ele={currEle}
                key={index}
                id={index}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
