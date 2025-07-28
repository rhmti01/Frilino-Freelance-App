import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { Controller, useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import TagsInput from "../../ui/TagsInput";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProjects from "./useCreateProjects";
import Loading from "../../ui/Loading";
import useEditProjects from "./useEditProject";
import toast from "react-hot-toast";
import { Button } from "@heroui/button";

function CreateProjectForm({ projectToEdit = {}, onClose }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    trigger,
    reset,
  } = useForm({
    defaultValues: {
      ...editValues,
      tags: prevTags || [],
    },
  });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || new Date()));

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProjects();
  const { isEditing, editProject } = useEditProjects();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
          onError: (error) => toast.error(error.message),
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    open && (
      <div>
        <div className=" w-full flex flex-col ">
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
                  value: 5,
                  message: "طول عنوان کوتاه است",
                },
                maxLength: {
                  value: 20,
                  message: "طول عنوان بلند است",
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
                  message: "طول توضیحات کوتاه است",
                },
                maxLength: {
                  value: 30,
                  message: "طول توضیحات بلند است",
                },
              }}
            />
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
                  message: "طول بودجه کوتاه است",
                },
                maxLength: {
                  value: 10,
                  message: "طول بودجه بلند است",
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
            <Button
              size=""
              type="submit"
              className=" mm:text-[15px] xx:text-base mm:py-[9.5px] ww:py-[11px] xx:py-3 xl:py-3.5 w-full bg-blue-600 hover:bg-blue-700
               duration-300 cursor-pointer mt-6 text-white rounded-xl  "
            >
              {isCreating || isEditing ? <Loading /> : "تایید"}
            </Button>
          </form>
        </div>
      </div>
    )
  );
}

export default CreateProjectForm;
