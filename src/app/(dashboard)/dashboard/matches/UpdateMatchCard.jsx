"use client";
import { useState } from "react";
import PopOver from "@/components/PopOver";

export default function UpdateMatchCard({setShowUpdateMatchModal}) {
  const [result, setResult] = useState(0);

  const handleSetResult = (id) => {
    setResult(id);
  };
  return (
    <PopOver>
      <div className="bg-white text-text-grey w-full lg:w-[40%] flex flex-col items-center  pb-4 font-righteous">
        <h3 className="font-[600] bg-light-green text-white text-center py-1 w-full">
          Update Match
        </h3>
        <form className="w-full flex flex-col items-center">
          <p>Match result</p>
          <div className="flex w-full px-2 gap-1">
            <button
              type="button"
              className={`${
                result == 1 ? "bg-light-green text-white" : "bg-gray-400 hover:bg-gray-800 text-white"
              } w-1/3 flex-1 rounded-md  h-[2rem]`}
              onClick={() => handleSetResult(1)}
            >
              Anderson
            </button>
            <button
              type="button"
              className={`${
                result == 2 ? "bg-light-green text-white" : "bg-gray-400 hover:bg-gray-800 text-white"
              } w-1/3 flex-1 rounded-md h-[2rem]`}
              onClick={() => handleSetResult(2)}
            >
              Draw
            </button>
            <button
              type="button"
              className={`${
                result == 3 ? "bg-light-green text-white" : "bg-gray-400 hover:bg-gray-800 text-white"
              } w-1/3 flex-1 rounded-md   h-[2rem]`}
              onClick={() => handleSetResult(3)}
            >
              Valentine
            </button>
          </div>
          <div className="flex w-full justify-center gap-2">
            <button
              type="button"
              className="mt-2 border text-light-grey h-[2rem] px-2 rounded-md"
              onClick={()=>setShowUpdateMatchModal(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="mt-2 bg-light-green h-[2rem] px-2 rounded-md text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </PopOver>
  );
}
