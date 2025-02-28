import React, { useEffect } from "react";
import Progress from "./Progress";

const TIMER = 3000;
const DeleteConfirmation = ({ handleStopDelete, handleDelete }) => {
  useEffect(() => {
    console.log("Timer is Set");
    const timer = setTimeout(() => {
      handleDelete();
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, [handleDelete]);
  return (
    <div className="bg-orange-950 p-5 text-stone-300 rounded-xl">
      <h2 className="text-2xl font-bold mb-5">Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div className="mt-10 flex gap-4 text-black w-full justify-end ">
        <button
          className="bg-yellow-500 px-4 py-1 rounded-md"
          onClick={handleStopDelete}
        >
          No
        </button>
        <button
          className="bg-yellow-500 px-4 py-1 rounded-md"
          onClick={handleDelete}
        >
          Yes
        </button>
      </div>
      <Progress TIMER={TIMER}/>
    </div>
  );
};

export default DeleteConfirmation;
