import { CloseSquare } from "iconsax-reactjs";
import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { Controller, useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import TagsInput from "../../ui/TagsInput";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProjects from "./useCreateProjects";
import Loading from "../../ui/Loading";

function CreateProjectForm({ open, onClose }) {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    trigger,
    reset,
  } = useForm();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProjects();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    createProject(newProject, {
      onSuccess: ()=>{
        onClose()
        reset()
      }
    });

    console.log(newProject);
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
                label="عنوان "
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
                label="توضیحات "
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
                label="بودجه "
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
                  },
                }}
              />
              <RHFSelect
                label="دسته بندی"
                name="category"
                register={register}
                options={categories}
                required
              />
              <TagsInput
                name="tags"
                register={register}
                error={errors?.tags?.message}
                setValue={setValue}
                trigger={trigger}
                tags={tags}
                setTags={setTags}
                required
              />
              <DatePickerField
                required
                date={date}
                setDate={setDate}
                label="ددلاین"
              />
              <button
                type="submit"
                className=" py-3 w-full bg-blue-600 hover:bg-blue-700
               duration-300 cursor-pointer mt-6 text-white rounded-xl  "
              >
                {isCreating ? <Loading/> :  "تایید" }
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
