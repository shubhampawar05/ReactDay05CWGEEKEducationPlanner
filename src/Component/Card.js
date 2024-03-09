import { useState } from "react";

export default function Card({ Time, Title }) {
  const [hr, setHr] = useState(Time);
function decresehandler(){
  if(hr>0){
    setHr(hr-1);
  }
}

  return (
    <>
      <div className="m-2 border-2 border-indigo-200 text-center p-2 ">
        <p className="text-black"> Course Name :- {Title}</p>
        <p className="text-black">Duration :- {hr}</p>
        <div className="  text-center mt-4 mb-2">
          <button
            onClick={()=>setHr(hr+1)}
            className="px-3 py-1 border-2 bg-yellow-600 mr-3 rounded-md "
          >
            +
          </button>
          <button
            onClick={() => (decresehandler())}
            className="px-3 py-1 border-2 bg-yellow-600 rounded-md"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}
