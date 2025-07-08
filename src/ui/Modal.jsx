import { CloseSquare } from "iconsax-reactjs";
import React from "react";

function Modal({ open, onClose, children, title }) {
  return (
    open && (
      <div>
        <div
          onClick={onClose}
          className=" cursor-pointer backdrop-blur-xl inset-0 fixed w-full h-screen
         bg-secondary-800 opacity-30 z-50 "
        ></div>
        <div
          className=" fixed top-1/2  left-1/2 -translate-1/2
         p-5 shadow-sm shadow-secondary-100 bg-secondary-0 rounded-xl duration-300 ease-out
          transition-all  z-50 w-[350px] flex items-center flex-col  "
        >
          <h1 className="  text-xl text-secondary-700 font-bold ">
            {title}
          </h1>
          <div
            onClick={onClose}
            className="absolute top-3 left-3 cursor-pointer "
          >
            <CloseSquare variant="Broken" className=" size-8 text-red-600  " />
          </div>
          <div className="mt-10 ">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
