import { CloseSquare } from "iconsax-reactjs";
import React from "react";

function Modal({ open, onClose, children, title  }) {
  return (
    open && (
      <div>
        {/* backdrop blur */}
        <div
          onClick={onClose}
          className=" cursor-default backdrop-blur-xs inset-0 fixed w-full h-screen
         bg-secondary-900/20  z-50 "
        ></div>

        <div
          className={` fixed top-1/2  left-1/2 -translate-1/2
         p-3 shadow-sm shadow-secondary-100 dark:shadow-dark-800 bg-secondary-0 dark:bg-dark-900 rounded-xl duration-300 ease-out
          transition-all  z-50 w-[calc(100vw-3rem)] md:max-w-[500px] max-h-[calc(100vh-2rem)] overflow-y-auto
          flex items-center flex-col   `}
        >
          <h1 className=" mt-2 text-xl text-secondary-700 dark:text-secondary-200 font-bold ">
            {title}
          </h1>
          <div
            onClick={onClose}
            className="absolute top-3 left-3 cursor-pointer "
          >
            <CloseSquare variant="Broken" className=" size-8 text-red-600  " />
          </div>
          <div className="mt-10 w-full ">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
