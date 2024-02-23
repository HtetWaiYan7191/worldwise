import React from "react";
import Button from "./Button";
import BackButton from "./BackButton";

export default function Form() {
  return (
    <div className="form-container w-[80%]">
      <form action="" className="p-8 bg-gray-700 rounded-md ">
        <div className="flex flex-col mb-4 gap-y-2">
          <label htmlFor="cityname">City Name</label>
          <input
            type="text"
            className="p-2 text-black text-white bg-gray-300 rounded-md outline-none active:outline-2"
            placeholder=""
          />
        </div>

        <div className="flex flex-col mb-6 gap-y-2">
          <label htmlFor="time">when did you go to ?</label>
          <input
            type="text"
            className="p-2 text-black text-white bg-gray-300 rounded-md outline-none active:outline-2"
            placeholder=""
          />
        </div>

        <div className="flex flex-col mb-6 gap-y-2">
          <label htmlFor="time">Notes about your trip</label>
          <textarea name="" id="" cols="10" rows="5" className="p-3 text-black bg-gray-300"></textarea>
        </div>

        <div className="flex justify-between btn-container">
          <Button > 
                ADD
            </Button>
         <BackButton/>
        </div>
      </form>
    </div>
  ); 
}
