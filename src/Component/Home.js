import React, { useState } from "react";
import Card from "./Card";

export default function Home() {
    
  const [data, setData] = useState([]);
  const [userInp, setUserInp] = useState("");
  const[userHr ,setUserHr] = useState('');
  console.log(userInp);

  function onClickHandler() {


    // dont do this thing in react this is a part of js not a react. 
    // in react in place of this we can use onChange eventlistioner and set this as a state variable
    // const textValue = document.getElementById("text-value").value;
    // const textHours = document.getElementById("hour-value").value;

    const NewUserData = {
      Title: userInp,
      Time: Number(userHr),
    };

    
      console.log(NewUserData);
      console.log('adf');
      setData([...data, NewUserData])
    
   
    
  }

// console.log(data);

  return (
    <div>
      <section className="w-full ">
        <div className="max-w-screen-xl mx-auto ">
          <div className="pt-12 text-center">
            <h1 className="py-8 text-3xl font-semibold ">
              Geekster Education Planner
            </h1>
            <input
            onChange={((e)=>setUserInp(e.target.value))}
            value={userInp}
              type="text"
              name=""
              id="text-value"
              placeholder="Subject"
              className="border-2 border-black mx-4 px-2 py-2  rounded-xl"
            />
            <input
              type="number"
              onChange={(e)=>setUserHr(e.target.value)}
              value={userHr}
              name=""
              id="hour-value"
              placeholder="Hours"
              className="border-2 border-black  mx-4 px-2 py-2  rounded-xl"
            />
            <input
              type="submit"
              value="Add"
              onClick={onClickHandler}
              className="border-2 mx-4 px-8 py-2  rounded-xl bg-green-400 font-semibold"
            />
          </div >
          <div className="border-2 shadow-md flex flex-wrap m-4 ">
          {
              data.map((item,i)=>{
                return(
                  <Card {...item} key={"s"+ i} />
                )
              })
            }
          </div>
           
           
        </div>
      </section>
    </div>
  );
}
