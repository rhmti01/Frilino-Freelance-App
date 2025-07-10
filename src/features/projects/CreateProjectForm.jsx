import { CloseSquare } from "iconsax-reactjs";
import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function CreateProjectForm({ open, onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
          className="  fixed top-1/2  left-1/2 -translate-1/2
         p-3 shadow-sm shadow-secondary-100 bg-secondary-0 rounded-xl duration-300 ease-out
          transition-all  z-50 w-[calc(100vw-3rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto flex items-center flex-col  "
        >
          <h1 className=" mt-4 text-xl text-secondary-700 font-bold ">
            افزودن پروژه جدید
          </h1>
          <div
            onClick={onClose}
            className="absolute top-3 left-3 cursor-pointer "
          >
            <CloseSquare variant="Broken" className=" size-8 text-red-600  " />
          </div>
          <div className="mt-5 mb-2 w-full flex flex-col ">
            <form onSubmit={handleSubmit(onSubmit)} className="px-3">
              <TextField
                label="عنوان پروژه"
                name="title"
                register={register}
                required
                errors={errors}
                validationSchema={{
                  required: "عنوان ضروری است",
                  minLength: {
                    value: 7,
                    message: "طول عنوان نامعتبر است",
                  },
                  maxLength: {
                    value: 20,
                    message: "طول عنوان نامعتبر است",
                  },
                }}
              />
              <TextField
                mt="mt-2"
                label="توضیحات پروژه"
                name="description"
                register={register}
                required
                errors={errors}
                validationSchema={{
                  required: "توضیحات ضروری است",
                  minLength: {
                    value: 12,
                    message: "طول توضیحات نامعتبر است",
                  },
                  maxLength: {
                    value: 30,
                    message: "طول توضیحات نامعتبر است",
                  },
                }}
              />{" "}
              <TextField
                label="بودجه پروژه"
                name="budget"
                dir="ltr"
                mt="mt-2"
                register={register}
                required
                errors={errors}
                validationSchema={{
                  required: "مقدار بودجه ضروری است",
                  minLength: {
                    value: 4,
                    message: "طول بودجه نامعتبر است",
                  },
                  maxLength: {
                    value: 10,
                    message: "طول بودجه نامعتبر است",
                  }
                }}
              />
              <button
                type="submit"
                className=" py-3 w-full bg-blue-600 hover:bg-blue-700
               duration-300 cursor-pointer mt-6 text-white rounded-xl  "
              >
                تایید
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
